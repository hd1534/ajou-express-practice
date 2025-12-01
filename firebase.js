var admin = require("firebase-admin");

var serviceAccount = require("./firebaseKey");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
