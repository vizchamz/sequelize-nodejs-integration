// Include Sequelize module.
const Sequelize = require('sequelize')

// Import sequelize object, 
// Database connection pool managed by Sequelize.
const sequelize = require('../utils/database')

// Define method takes two arrguments
// 1st - name of table
// 2nd - columns inside the table
const connector_api_logs = sequelize.define('connector_api_logs', {

    // Column-1, id is an object with 
    // properties like type, keys, 
    // validation of column.
    id: {

        // Sequelize module has INTEGER Data_Type.
        type: Sequelize.INTEGER(10),

        // To increment user_id automatically.
        autoIncrement: true,

        // user_id can not be null.
        allowNull: false,

        // For uniquely identify user.
        primaryKey: true
    },

    // Column-2, user_id
    user_id: { type: Sequelize.INTEGER(10), allowNull: false },

    // Column-3, request
    request: { type: Sequelize.TEXT, allowNull: false },

    // Column-4, response
    response: { type: Sequelize.TEXT, allowNull: false },

    // Column-5, url
    url: { type: Sequelize.STRING(100), allowNull: false },

    // Column-6, ip
    ip: { type: Sequelize.STRING(100), allowNull: false },

    // Column-7, status
    status: { type: Sequelize.TINYINT(1), allowNull: false },

    // Column-8, logged_at
    logged_at: { type: Sequelize.DATE, allowNull: false },

}, {
    tableName: 'connector_api_logs',
    timestamps: true,
    createdAt: 'logged_at',
    updatedAt: 'updated_at'
})

// Exporting connector_api_logs, using this constant
// we can perform CRUD operations on
// 'connector_api_logs' table.
module.exports = connector_api_logs