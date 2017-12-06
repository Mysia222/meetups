var Sequelize = require('sequelize');
var yourDB = "postgres://postgres@localhost:5432/meetupsdb";
var sequelize = new Sequelize(yourDB, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            require: true
        }
    }
});

module.exports = sequelize;