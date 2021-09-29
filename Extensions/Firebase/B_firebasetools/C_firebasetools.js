var gdjs;
(function(gdjs2) {
  let evtTools;
  (function(evtTools2) {
    let firebaseTools;
    (function(firebaseTools2) {
      firebaseTools2.onAppCreated = [];
      firebaseTools2._setupFirebase = async (runtimeScene) => {
        try {
          var firebaseConfig = JSON.parse(runtimeScene.getGame().getExtensionProperty("Firebase", "FirebaseConfig"));
        } catch (e) {
          console.error("The Firebase configuration is invalid! Error: " + e);
          return;
        }
        if (typeof firebaseConfig !== "object")
          return;
        if (firebase.apps.length !== 0)
          await firebase.app().delete();
        firebase.initializeApp(firebaseConfig);
        for (let func of firebaseTools2.onAppCreated)
          func();
      };
      gdjs2.registerFirstRuntimeSceneLoadedCallback(firebaseTools2._setupFirebase);
    })(firebaseTools = evtTools2.firebaseTools || (evtTools2.firebaseTools = {}));
  })(evtTools = gdjs2.evtTools || (gdjs2.evtTools = {}));
})(gdjs || (gdjs = {}));
//# sourceMappingURL=C_firebasetools.js.map
