var firebase = require("firebase-admin");

var serviceAccount = require("./firebaseKey");

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount)
});


module.exports = firebase