const User = require('./User');
const Student = require('./Student');
const University = require('./University');
const Admission = require('./Admission');
const Course = require('./Course');
const Degree = require('./Degree');
const Program = require('./Progam');
const CourseRegistration = require('./Course_Registration');
const CourseProgram = require('./Course_Progam');

// Relationships
University.hasMany(Course, { foreignKey: 'university_id' });
Course.belongsTo(University, { foreignKey: 'university_id' });

University.hasMany(Program, { foreignKey: 'university_id' });
Program.belongsTo(University, { foreignKey: 'university_id' });

Student.hasMany(Admission, { foreignKey: 'student_id' });
Admission.belongsTo(Student, { foreignKey: 'student_id' });

University.hasMany(Admission, { foreignKey: 'university_id' });
Admission.belongsTo(University, { foreignKey: 'university_id' });

Student.hasMany(CourseRegistration, { foreignKey: 'student_id' });
CourseRegistration.belongsTo(Student, { foreignKey: 'student_id' });

Course.hasMany(CourseRegistration, { foreignKey: 'courses_id' });
CourseRegistration.belongsTo(Course, { foreignKey: 'courses_id' });

Course.hasMany(CourseProgram, { foreignKey: 'courses_id' });
CourseProgram.belongsTo(Course, { foreignKey: 'courses_id' });

Program.hasMany(CourseProgram, { foreignKey: 'program_id' });
CourseProgram.belongsTo(Program, { foreignKey: 'program_id' });

module.exports = {
  Student,
  University,
  Admission,
  Course,
  Degree,
  Program,
  CourseRegistration,
  CourseProgram,
};
