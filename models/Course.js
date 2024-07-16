const { DataTypes } = require('sequelize');
const {sequelize} = require('../utils/db');

const Course = sequelize.define('Course', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  university_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'University',
      key: 'id',
    },
  },
  name: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.STRING, allowNull: false },
  credits: { type: DataTypes.STRING, allowNull: false },
  degree: { type: DataTypes.STRING, allowNull: false }
});

module.exports = Course;
