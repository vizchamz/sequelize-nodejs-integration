const express = require('express');
const cors = require('cors');
const app = express();

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// Import the sequelize object on which
// we have defined model.
const sequelize = require('./utils/database')

// Import the connector_user model we have defined
const connector_users = require('./models/user')

// Import the connector_api_log model we have defined
const connector_api_logs = require('./models/apiLog')

// Create all the table defined using 
// sequelize in Database

// Sync all models that are not
// already in the database
sequelize.sync()

// Force sync all models
// It will drop the table first 
// and re-create it afterwards
//sequelize.sync({force:true})

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to ViciDial Connector application." });
});

require("./routes/userRoute.js")(app);
require("./routes/apiLogRoute.js")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8585;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});