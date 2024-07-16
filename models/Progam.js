const { DataTypes } = require('sequelize');
const {sequelize} = require('../utils/db');

const Program = sequelize.define('Program', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: { type: DataTypes.STRING, allowNull: false },
  university_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'University',
      key: 'id',
    },
  },
});

module.exports = Program;
