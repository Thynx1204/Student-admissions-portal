const { DataTypes } = require('sequelize');
const {sequelize} = require('../utils/db');

const University = sequelize.define('University', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name:{ type: DataTypes.STRING, allowNull: false },
  location: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.STRING, allowNull: false },
  logo:  { type: DataTypes.STRING, allowNull: false},
  phone_number:  { type: DataTypes.INTEGER, allowNull: false, unique: true },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  password: { type: DataTypes.STRING,allowNull: false}
});
University.sync({ alter : true})

module.exports = University;
