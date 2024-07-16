const { DataTypes } = require('sequelize');
const {sequelize} = require('../utils/db');

const CourseProgram = sequelize.define('Course_Program', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  courses_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Course',
      key: 'id',
    },
  },
  program_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Program',
      key: 'id',
    },
  },
});

module.exports = CourseProgram;
