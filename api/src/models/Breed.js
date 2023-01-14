const { DataTypes } = require('sequelize');

module.exports = sequelize => {
    sequelize.define('breed', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: true
        },
        height: {
            type: DataTypes.STRING,
            allowNull: false
        },
        weight: {
            type: DataTypes.STRING,
            allowNull: false
        },
        life_span: {
            type: DataTypes.STRING
        },
        createInDb: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
    },{timestamps: false});
}