const db = require("../models");
const ConnectorAPILogs = db.connector_api_logs;

// Create and Save a new API log
exports.create = (req, res) => {
  // Validate request
  if (!req.body.user_id) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a API Log
  const api = {
    user_id: req.body.user_id,
    request: req.body.request,
    response: req.body.response,
    url: req.body.url,
    ip: req.body.ip,
    status: req.body.status
  };

  // Save API Log in the database
  ConnectorAPILogs.create(api)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the API Log."
      });
    });
};

// Retrieve all API Logs from the database.
exports.findAll = (req, res) => {
  ConnectorAPILogs.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving API Logs."
      });
    });
};

// Find a single API Log with a id
exports.findOne = (req, res) => {
  const id = req.params.id;

  ConnectorAPILogs.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving API Log with id=" + id
      });
    });
};

// Update a API Log by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  ConnectorAPILogs.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "API Log was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update API Log with id=${id}. Maybe API Log was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating API Log with id=" + id
      });
    });
};

// Delete a API Log with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  ConnectorAPILogs.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "API Log was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete API Log with id=${id}. Maybe API Log was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete API Log with id=" + id
      });
    });
};

// find all Active API Logs
exports.findAllActive = (req, res) => {
  ConnectorAPILogs.findAll({ where: { status: 1 } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Active API Logs."
      });
    });
};

// Delete all API Logs from the database.
exports.deleteAll = (req, res) => {
  ConnectorAPILogs.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} API Logs were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all API Logs."
      });
    });
};