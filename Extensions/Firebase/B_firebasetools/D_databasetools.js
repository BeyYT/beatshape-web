var gdjs;
(function(gdjs2) {
  let evtTools;
  (function(evtTools2) {
    let firebaseTools;
    (function(firebaseTools2) {
      let database;
      (function(database2) {
        database2.writeVariable = (path, variable, callbackStateVariable) => {
          firebase.database().ref(path).set(variable.toJSObject()).then(() => {
            if (typeof callbackStateVariable !== "undefined")
              callbackStateVariable.setString("ok");
          }).catch((error) => {
            if (typeof callbackStateVariable !== "undefined")
              callbackStateVariable.setString(error.message);
          });
        };
        database2.writeField = (path, field, value, callbackStateVariable) => {
          firebase.database().ref(path).set({[field]: value}).then(() => {
            if (typeof callbackStateVariable !== "undefined")
              callbackStateVariable.setString("ok");
          }).catch((error) => {
            if (typeof callbackStateVariable !== "undefined")
              callbackStateVariable.setString(error.message);
          });
        };
        database2.updateVariable = (path, variable, callbackStateVariable) => {
          firebase.database().ref(path).update(variable.toJSObject()).then(() => {
            if (typeof callbackStateVariable !== "undefined")
              callbackStateVariable.setString("ok");
          }).catch((error) => {
            if (typeof callbackStateVariable !== "undefined")
              callbackStateVariable.setString(error.message);
          });
        };
        database2.updateField = (path, field, value, callbackStateVariable) => {
          const updateObject = {};
          updateObject[field] = value;
          firebase.database().ref(path).update(updateObject).then(() => {
            if (typeof callbackStateVariable !== "undefined")
              callbackStateVariable.setString("ok");
          }).catch((error) => {
            if (typeof callbackStateVariable !== "undefined")
              callbackStateVariable.setString(error.message);
          });
        };
        database2.deleteVariable = (path, callbackStateVariable) => {
          firebase.database().ref(path).remove().then(() => {
            if (typeof callbackStateVariable !== "undefined")
              callbackStateVariable.setString("ok");
          }).catch((error) => {
            if (typeof callbackStateVariable !== "undefined")
              callbackStateVariable.setString(error.message);
          });
        };
        database2.deleteField = (path, field, callbackStateVariable) => {
          const updateObject = {};
          updateObject[field] = null;
          firebase.database().ref(path).update(updateObject).then(() => {
            if (typeof callbackStateVariable !== "undefined")
              callbackStateVariable.setString("ok");
          }).catch((error) => {
            if (typeof callbackStateVariable !== "undefined")
              callbackStateVariable.setString(error.message);
          });
        };
        database2.getVariable = (path, callbackValueVariable, callbackStateVariable) => {
          firebase.database().ref(path).once("value").then((snapshot) => {
            if (typeof callbackStateVariable !== "undefined")
              callbackStateVariable.setString("ok");
            if (typeof callbackValueVariable !== "undefined")
              callbackValueVariable.fromJSObject(snapshot.val());
          }).catch((error) => {
            if (typeof callbackStateVariable !== "undefined")
              callbackStateVariable.setString(error.message);
          });
        };
        database2.getField = (path, field, callbackValueVariable, callbackStateVariable) => {
          firebase.database().ref(path).once("value").then((snapshot) => {
            if (typeof callbackStateVariable !== "undefined")
              callbackStateVariable.setString("ok");
            if (typeof callbackValueVariable !== "undefined")
              callbackValueVariable.fromJSObject(snapshot.val()[field]);
          }).catch((error) => {
            if (typeof callbackStateVariable !== "undefined")
              callbackStateVariable.setString(error.message);
          });
        };
        database2.hasVariable = (path, callbackValueVariable, callbackStateVariable) => {
          firebase.database().ref(path).once("value").then((snapshot) => {
            if (typeof callbackStateVariable !== "undefined")
              callbackStateVariable.setString("ok");
            if (typeof callbackValueVariable !== "undefined")
              callbackValueVariable.setBoolean(snapshot.exists() && snapshot.val() !== null && snapshot.val() !== void 0);
          }).catch((error) => {
            if (typeof callbackStateVariable !== "undefined")
              callbackStateVariable.setString(error.message);
          });
        };
        database2.hasField = (path, field, callbackValueVariable, callbackStateVariable) => {
          firebase.database().ref(path).once("value").then((snapshot) => {
            if (typeof callbackStateVariable !== "undefined")
              callbackStateVariable.setString("ok");
            if (typeof callbackValueVariable !== "undefined") {
              const value = snapshot.val()[field];
              callbackValueVariable.setBoolean(snapshot.exists() && value !== null && value !== void 0);
            }
          }).catch((error) => {
            if (typeof callbackStateVariable !== "undefined")
              callbackStateVariable.setString(error.message);
          });
        };
      })(database = firebaseTools2.database || (firebaseTools2.database = {}));
    })(firebaseTools = evtTools2.firebaseTools || (evtTools2.firebaseTools = {}));
  })(evtTools = gdjs2.evtTools || (gdjs2.evtTools = {}));
})(gdjs || (gdjs = {}));
//# sourceMappingURL=D_databasetools.js.map
