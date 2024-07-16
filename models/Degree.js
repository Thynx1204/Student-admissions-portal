const { DataTypes } = require('sequelize');
const {sequelize} = require('../utils/db');

const Degree = sequelize.define('Degree', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: { type: DataTypes.STRING, allowNull: false },
  nb_year: { type: DataTypes.INTEGER, allowNull: false },
});

module.exports = Degree;
