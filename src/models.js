const { Sequelize, DataTypes } = require('sequelize');


const database = new Sequelize('sqlite:./db.sqlite');

const User = database.define('user', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(100),
        validate: {
            notEmpty: true,
        }
    },
    email: { 
        type: DataTypes.STRING, 
        unique: true,       
        validate: {
            notEmpty: true,
            isEmail: true
        }
    },
    password: DataTypes.STRING(100),
}, {});

const Movie = database.define('movie', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        validate: {
            notEmpty: true,
        }
    },
    year: {
        type: DataTypes.SMALLINT,       
        allowNull: false,
        validate: {
            isInt: true,
        }
    }
});

module.exports = { database, User, Movie };