var firebase = require("firebase-admin");

try {
  var serviceAccount = require("./firebaseKey");

  firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount),
  });
} catch (error) {
  if (error.code === "MODULE_NOT_FOUND") {
    console.warn(
      `./firebaseKey 파일을 찾을 수 없습니다. Firebase Admin SDK 초기화를 건너뜁니다.`
    );
  }
}

module.exports = firebase;
