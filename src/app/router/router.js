// @flow

const UniversalRouter = require('universal-router/main.js');

const routes = require('./routes.js');

module.exports = new UniversalRouter(routes);
