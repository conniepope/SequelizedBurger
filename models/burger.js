// Sequelized dependency

// var Sequelize = require("sequelize");
// var sequelize = require("../config/config.json");

module.exports = function(sequelize, DataTypes){
    var burgers = sequelize.define("burgers", {
        burger_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    }, {
        freezeTableName: true
    },)
    // Syncs with DB
    burgers.sync();
    return burgers;
}


