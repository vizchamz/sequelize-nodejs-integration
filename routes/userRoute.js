module.exports = app => {
    const connector_users = require("../controllers/userController.js");

    var router = require("express").Router();

    // Create a new User
    router.post("/", connector_users.create);

    // Retrieve all Users
    router.get("/", connector_users.findAll);

    // Retrieve all active Users
    router.get("/active", connector_users.findAllActive);

    // Retrieve a single user with id
    router.get("/:id", connector_users.findOne);

    // Update a User with id
    router.put("/:id", connector_users.update);

    // Delete a User with id
    router.delete("/:id", connector_users.delete);

    // Delete all Users
    router.delete("/", connector_users.deleteAll);

    app.use('/api/connectorusers', router);
};