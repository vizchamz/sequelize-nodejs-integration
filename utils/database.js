const Sequelize = require('sequelize')
const sequelize = new Sequelize(
    {
        database: 'vicidial_connector',
        username: 'root',
        password: null,
        dialect: 'mysql',
        timezone: '+05:30',
        host: 'localhost',
    }
);
module.exports = sequelize