const db = require('./db')
const {DataTypes} = require('sequelize')

module.exports = {
    User: db.define("user", {
        id: {
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
            type: DataTypes.INTEGER
        },
        username: {
            type: DataTypes.STRING({length:20}),
            allowNull: false
        },
        password: {
            type: DataTypes.STRING({length:300}),
            allowNull: false
        },
    }),
    Post: db.define("post", {
        id: {
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
            type: DataTypes.INTEGER
        },
        title: {
            type: DataTypes.STRING({length: 40}),
            allowNull: false
        },
        description: {
            type: DataTypes.STRING({length: 300}),
            allowNull: false,
        },
        type: {
            type: DataTypes.STRING({length: 30}),
            allowNull: false
        },
        time: {
            type: DataTypes.STRING({length: 30}),
            allowNull: false
        }
    }),
    Like: db.define("like", {
        id: {
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
            type: DataTypes.INTEGER
        },
        like: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    }),
    Goal: db.define("goal", {
        id: {
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
            type: DataTypes.INTEGER
        },
        description: {
            type: DataTypes.STRING({length: 300}),
            allowNull: false,
        },
        status: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        }
    }),
}