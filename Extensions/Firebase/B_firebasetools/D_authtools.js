var gdjs;
(function(gdjs2) {
  let evtTools;
  (function(evtTools2) {
    let firebaseTools;
    (function(firebaseTools2) {
      let auth;
      (function(auth2) {
        const providersList = {
          google: firebase.auth.GoogleAuthProvider,
          facebook: firebase.auth.FacebookAuthProvider,
          github: firebase.auth.GithubAuthProvider,
          twitter: firebase.auth.TwitterAuthProvider
        };
        let _token = "";
        let _currentProvider = null;
        auth2.authentified = false;
        auth2.currentUser = null;
        let userManagement;
        (function(userManagement2) {
          let dangerous;
          (function(dangerous2) {
            dangerous2.changeEmail = (oldEmail, password, newEmail, sendVerificationEmail2 = true, callbackStateVariable) => {
              if (!auth2.currentUser)
                return;
              const credential = firebase.auth.EmailAuthProvider.credential(oldEmail, password);
              const updater = sendVerificationEmail2 ? auth2.currentUser.updateEmail : auth2.currentUser.verifyBeforeUpdateEmail;
              auth2.currentUser.reauthenticateWithCredential(credential).then(() => updater(newEmail)).then(() => {
                if (typeof callbackStateVariable !== "undefined")
                  callbackStateVariable.setString("ok");
              }).catch((error) => {
                if (typeof callbackStateVariable !== "undefined")
                  callbackStateVariable.setString(error.message);
              });
            };
            dangerous2.changePassword = (email, oldPassword, newPassword, callbackStateVariable) => {
              if (!auth2.currentUser)
                return;
              const credential = firebase.auth.EmailAuthProvider.credential(email, oldPassword);
              auth2.currentUser.reauthenticateWithCredential(credential).then(() => auth2.currentUser.updatePassword(newPassword)).then(() => {
                if (typeof callbackStateVariable !== "undefined")
                  callbackStateVariable.setString("ok");
              }).catch((error) => {
                if (typeof callbackStateVariable !== "undefined")
                  callbackStateVariable.setString(error.message);
              });
            };
            dangerous2.deleteUser = (email, password, callbackStateVariable) => {
              if (!auth2.currentUser)
                return;
              const credential = firebase.auth.EmailAuthProvider.credential(email, password);
              auth2.currentUser.reauthenticateWithCredential(credential).then(() => auth2.currentUser.delete()).then(() => {
                if (typeof callbackStateVariable !== "undefined")
                  callbackStateVariable.setString("ok");
              }).catch((error) => {
                if (typeof callbackStateVariable !== "undefined")
                  callbackStateVariable.setString(error.message);
              });
            };
            dangerous2.changeEmailProvider = (newEmail, sendVerificationEmail2, callbackStateVariable) => {
              if (!auth2.currentUser || !_currentProvider)
                return;
              const updater = sendVerificationEmail2 ? auth2.currentUser.updateEmail : auth2.currentUser.verifyBeforeUpdateEmail;
              auth2.currentUser.reauthenticateWithPopup(_currentProvider).then(() => updater(newEmail)).then(() => {
                if (typeof callbackStateVariable !== "undefined") {
                  callbackStateVariable.setString("ok");
                }
              }).catch((error) => {
                if (typeof callbackStateVariable !== "undefined") {
                  callbackStateVariable.setString(error.message);
                }
              });
            };
            dangerous2.changePasswordProvider = (newPassword, callbackStateVariable) => {
              if (auth2.currentUser && _currentProvider)
                auth2.currentUser.reauthenticateWithPopup(_currentProvider).then(() => auth2.currentUser.updatePassword(newPassword)).then(() => {
                  if (typeof callbackStateVariable !== "undefined")
                    callbackStateVariable.setString("ok");
                }).catch((error) => {
                  if (typeof callbackStateVariable !== "undefined")
                    callbackStateVariable.setString(error.message);
                });
            };
            dangerous2.deleteUserProvider = (callbackStateVariable) => {
              if (auth2.currentUser && _currentProvider)
                auth2.currentUser.reauthenticateWithPopup(_currentProvider).then(() => auth2.currentUser.delete()).then(() => {
                  if (typeof callbackStateVariable !== "undefined")
                    callbackStateVariable.setString("ok");
                }).catch((error) => {
                  if (typeof callbackStateVariable !== "undefined")
                    callbackStateVariable.setString(error.message);
                });
            };
          })(dangerous = userManagement2.dangerous || (userManagement2.dangerous = {}));
          userManagement2.isEmailVerified = () => auth2.currentUser ? auth2.currentUser.emailVerified : false;
          userManagement2.getEmail = () => auth2.currentUser ? auth2.currentUser.email || "" : "";
          userManagement2.getCreationTime = () => auth2.currentUser ? auth2.currentUser.metadata.creationTime || "" : "";
          userManagement2.getLastLoginTime = () => auth2.currentUser ? auth2.currentUser.metadata.lastSignInTime || "" : "";
          userManagement2.getDisplayName = () => auth2.currentUser ? auth2.currentUser.displayName || "" : "";
          userManagement2.getPhoneNumber = () => auth2.currentUser ? auth2.currentUser.phoneNumber || "" : "";
          userManagement2.getUID = () => auth2.currentUser ? auth2.currentUser.uid || "" : "";
          userManagement2.getTenantID = () => auth2.currentUser ? auth2.currentUser.tenantId || "" : "";
          userManagement2.getRefreshToken = () => auth2.currentUser ? auth2.currentUser.refreshToken || "" : "";
          userManagement2.getPhotoURL = () => auth2.currentUser ? auth2.currentUser.photoURL || "" : "";
          userManagement2.setDisplayName = (newDisplayName) => {
            if (auth2.currentUser)
              return auth2.currentUser.updateProfile({
                displayName: newDisplayName
              });
            return Promise.reject("Sign in before setting displayName");
          };
          userManagement2.setPhotoURL = (newPhotoURL) => {
            if (auth2.currentUser)
              return auth2.currentUser.updateProfile({
                photoURL: newPhotoURL
              });
            return Promise.reject("Sign in before setting photoURL");
          };
          userManagement2.sendVerificationEmail = () => auth2.currentUser ? auth2.currentUser.sendEmailVerification() : "";
        })(userManagement = auth2.userManagement || (auth2.userManagement = {}));
        auth2.token = () => {
          if (auth2.currentUser)
            auth2.currentUser.getIdToken().then((token2) => _token = token2);
          return _token;
        };
        auth2.isAuthentified = () => auth2.authentified;
        auth2.signInWithEmail = (email, password, callbackStateVariable) => firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
          if (typeof callbackStateVariable !== "undefined")
            callbackStateVariable.setString("ok");
        }).catch((error) => {
          if (typeof callbackStateVariable !== "undefined")
            callbackStateVariable.setString(error.message);
        });
        auth2.createAccountWithEmail = (email, password, callbackStateVariable) => firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {
          if (typeof callbackStateVariable !== "undefined")
            callbackStateVariable.setString("ok");
        }).catch((error) => {
          if (typeof callbackStateVariable !== "undefined")
            callbackStateVariable.setString(error.message);
        });
        auth2.anonymSignIn = (callbackStateVariable) => firebase.auth().signInAnonymously().then(() => {
          if (typeof callbackStateVariable !== "undefined")
            callbackStateVariable.setString("ok");
        }).catch((error) => {
          if (typeof callbackStateVariable !== "undefined")
            callbackStateVariable.setString(error.message);
        });
        auth2.signInWithProvider = function(providerName, callbackStateVariable) {
          _currentProvider = new providersList[providerName]();
          firebase.auth().signInWithPopup(_currentProvider).then(() => {
            if (typeof callbackStateVariable !== "undefined")
              callbackStateVariable.setString("ok");
          }).catch((error) => {
            if (typeof callbackStateVariable !== "undefined")
              callbackStateVariable.setString(error.message);
          });
        };
        firebaseTools2.onAppCreated.push(() => {
          firebase.auth().onAuthStateChanged((user) => {
            if (user) {
              auth2.authentified = true;
              auth2.currentUser = user;
              user.getIdToken().then((token2) => _token = token2);
            } else {
              auth2.authentified = false;
              auth2.currentUser = null;
            }
          });
        });
      })(auth = firebaseTools2.auth || (firebaseTools2.auth = {}));
    })(firebaseTools = evtTools2.firebaseTools || (evtTools2.firebaseTools = {}));
  })(evtTools = gdjs2.evtTools || (gdjs2.evtTools = {}));
})(gdjs || (gdjs = {}));
//# sourceMappingURL=D_authtools.js.map
