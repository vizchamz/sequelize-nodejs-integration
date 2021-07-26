const connector_users = require('./user.js');
const connector_api_logs = require('./apiLog.js');

connector_users.hasMany(connector_api_logs, {
    foreignKey: 'user_id'
});
connector_api_logs.belongsTo(connector_users, {
    foreignKey: 'user_id'
});

module.exports = { connector_users, connector_api_logs }