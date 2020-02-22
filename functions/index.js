require('dotenv').config();
const functions = require('firebase-functions');
const admin = require('firebase-admin');

const { helloWorld } = require('./handlers/hello');

admin.initializeApp();

exports.helloWorld = functions.https.onRequest(helloWorld(admin));
