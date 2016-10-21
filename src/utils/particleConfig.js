// Exports all configs from .particlerc file to process.env

const appRoot = require('app-root-path');
const dotenv = require('dotenv');

dotenv.config({
    path: appRoot + '/bin/.particlerc'
});
