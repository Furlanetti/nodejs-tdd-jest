const routes = require("express").Router();
const SessionController = require("./controllers/SessionController");

routes.post("/sessions", SessionController.store);

module.exports = routes;
