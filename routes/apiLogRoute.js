module.exports = app => {
  const connector_api_logs = require("../controllers/apiLogController.js");

  var router = require("express").Router();

  // Create a new User
  router.post("/", connector_api_logs.create);

  // Retrieve all Users
  router.get("/", connector_api_logs.findAll);

  // Retrieve all active API Logs
  router.get("/active", connector_api_logs.findAllActive);

  // Retrieve a single API Log with id
  router.get("/:id", connector_api_logs.findOne);

  // Update a API Log with id
  router.put("/:id", connector_api_logs.update);

  // Delete a API Log with id
  router.delete("/:id", connector_api_logs.delete);

  // Delete all Users
  router.delete("/", connector_api_logs.deleteAll);

  app.use('/api/connectorapilogs', router);
};