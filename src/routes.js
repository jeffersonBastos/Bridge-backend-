const express = require('express');
const routes = express.Router();

const ControllerDiv = require('./controllers/ControllerDiv');

routes.post('/div',ControllerDiv.div);

module.exports = routes;

