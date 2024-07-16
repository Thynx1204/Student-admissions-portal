const { DataTypes } = require('sequelize');
const {sequelize} = require('../utils/db');

const CourseRegistration = sequelize.define('Course_Registration', {
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
  courses_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Course',
      key: 'id',
    },
  },
});

module.exports = CourseRegistration;
