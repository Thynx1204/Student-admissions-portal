const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Student = require('../models/Student');

const studentRegister = async (userdata) => {
  const { last_name, first_name, address, phone_number, sex, nationality, birthdate, user_id } = userdata;
  console.log(userdata)
  
  try {

    const user = await User.findOne({ where: { id : user_id } });
    console.log(user)
    
    if (user && user.dataValues.role === 'student') {

      const student = await Student.create({
        last_name,
        first_name,
        address,
        phone_number,
        sex,
        nationality,
        birthdate,
        user_id
      });

      console.log(student);
      return student;
    } else {
      throw new Error('User not found or not a student');
    }
  } catch (error) {
    console.error(error);
    throw new Error('Error during registration');
  }
};

const studentLogin = async ({ email, password }) => {
  try {
    const student = await Student.findOne({ where: { email } });
    
    if (!student || !await bcrypt.compare(password, student.password)) {
      throw new Error('Invalid credentials');
    }
    
    const token = jwt.sign({ id: student.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return token;
  } catch (error) {
    console.log(error);
    throw new Error('Error during login');
  }
};

const updateStudent = async (id, updateData) => {
  const {last_name, first_name, address, phone_number, sex, nationality, birthdate } = updateData
  try {
    const student = await Student.findByPk(id);
    if (!student) {
      throw new Error('Student not found');
    }
    const updatedStudent = await student.update({ last_name, first_name, address, phone_number, sex, nationality, birthdate });
    return updatedStudent;
  } catch (error) {
    console.log(error);
    throw new Error('Error during student update');
  }
};

const deleteStudent = async (id) => {
  try {
    const student = await Student.findByPk(id);
    if (!student) {
      throw new Error('User not found');
    }
    await student.destroy();
    return { message: 'User deleted successfully' };
  } catch (error) {
    console.log(error);
    throw new Error('Error during user deletion');
  }
};

module.exports = {
  studentRegister,
  studentLogin,
  updateStudent,
  deleteStudent,
};
