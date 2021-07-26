const db = require("../models");
const ConnectorUser = db.connector_users;

// Create and Save a new User
exports.create = (req, res) => {
    // Validate request
    if (!req.body.first_name) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a User
    const user = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        ext_user_id: req.body.ext_user_id,
        ext_user_vurl: req.body.ext_user_vurl,
        vd_agent_username: req.body.vd_agent_username,
        vd_agent_password: req.body.vd_agent_password,
        vd_phone_username: req.body.vd_phone_username,
        vd_phone_password: req.body.vd_phone_password,
        status: req.body.status,
        created_by: req.body.created_by,
        updated_by: req.body.updated_by
    };

    // Save User in the database
    ConnectorUser.create(user)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the User."
            });
        });
};

// Retrieve all Users from the database.
exports.findAll = (req, res) => {
    ConnectorUser.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving users."
            });
        });
};

// Find a single User with a id
exports.findOne = (req, res) => {
    const id = req.params.id;

    ConnectorUser.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving User with id=" + id
            });
        });
};

// Update a User by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    ConnectorUser.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "User was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update User with id=${id}. Maybe User was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating User with id=" + id
            });
        });
};

// Delete a User with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    ConnectorUser.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "User was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete User with id=${id}. Maybe User was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete User with id=" + id
            });
        });
};

// find all Active API Logs
exports.findAllActive = (req, res) => {
    ConnectorUser.findAll({ where: { status: 1 } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Active Users."
            });
        });
};

// Delete all users from the database.
exports.deleteAll = (req, res) => {
    ConnectorUser.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Users were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all users."
            });
        });
};