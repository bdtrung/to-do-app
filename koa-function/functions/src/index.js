const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const hello = require('./handlers/helloWorld')

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

exports.helloWorld = onRequest(hello.callback());
