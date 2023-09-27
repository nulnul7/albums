
module.exports = (sequelize, DataTypes) => {
    const Album = sequelize.define("Album", {
        singer: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        url: {
            type: DataTypes.STRING,
            allowNull: true,
        }
    })
    return Album
}

// var { Sequelize } = require('sequelize');
// var db = require('../config/dbConfig');

// const { DataTypes } = Sequelize;
// const Album = db.define('album', {
//     singer: DataTypes.STRING,
//     title: DataTypes.STRING,
//     image: DataTypes.STRING,
//     url: DataTypes.STRING
// }, {
//     freezeTableName: true
// });

// module.exports = { Album };

// (async () => {
//     await db.sync()
// })();