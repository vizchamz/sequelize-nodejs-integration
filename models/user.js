// Include Sequelize module.
const Sequelize = require('sequelize')

// Import sequelize object, 
// Database connection pool managed by Sequelize.
const sequelize = require('../utils/database')

// Define method takes two arrguments
// 1st - name of table
// 2nd - columns inside the table
const connector_users = sequelize.define('connector_users', {

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

    // Column-2, first_name
    first_name: { type: Sequelize.STRING(255), allowNull: false },

    // Column-3, last_name
    last_name: { type: Sequelize.STRING(255), allowNull: false },

    // Column-4, email
    email: { type: Sequelize.STRING(100), allowNull: false },
 
    // Column-5, ext_user_id
    ext_user_id: { type: Sequelize.STRING(100), allowNull: false },

    // Column-6, ext_user_vurl
    ext_user_vurl: { type: Sequelize.STRING(255), allowNull: false },

    // Column-7, vd_agent_username
    vd_agent_username: { type: Sequelize.STRING(100), allowNull: false },

    // Column-8, vd_agent_password
    vd_agent_password: { type: Sequelize.STRING(100), allowNull: false },

    // Column-9, vd_phone_username
    vd_phone_username: { type: Sequelize.STRING(100), allowNull: false },

    // Column-10, vd_phone_password
    vd_phone_password: { type: Sequelize.STRING(100), allowNull: false },

    // Column-11, status
    status: { type: Sequelize.TINYINT(1), allowNull: false },

    // Column-12, deleted_at
    deleted_at: Sequelize.DATE,

    // Column-13, created_at
    created_at: Sequelize.DATE,

    // Column-14, created_by
    created_by: { type: Sequelize.INTEGER(10), allowNull: false },

    // Column-15, updated_at
    updated_at: Sequelize.DATE,

    // Column-16, updated_by
    updated_by: { type: Sequelize.INTEGER(10), allowNull: false },
    
}, {
    tableName: 'connector_users',
    timestamps: true,
    paranoid: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at'
})



// Exporting connector_users, using this constant
// we can perform CRUD operations on
// 'connector_users' table.
module.exports = connector_users