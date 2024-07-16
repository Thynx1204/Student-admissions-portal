const { DataTypes } = require('sequelize');
const {sequelize} = require('../utils/db');

const Admission = sequelize.define('Admission', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  student_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Student',
      key: 'id',
    },
  },
  university_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Universities',
      key: 'id',
    },
  },
  cover_letter: { type: DataTypes.STRING, allowNull: false },
  graduation_year: { type: DataTypes.INTEGER, allowNull: false },
  average_score: { type: DataTypes.FLOAT, allowNull: false },
  degree: { type: DataTypes.STRING, allowNull: false },
  card_url: { type: DataTypes.STRING, allowNull: false },
  status: { type: DataTypes.STRING, allowNull: false }
});

module.exports = Admission;
