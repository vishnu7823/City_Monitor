const admin = require('firebase-admin');
const serviceAccount = require('./firebaseServiceAccountKey.json'); // correct path

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;
