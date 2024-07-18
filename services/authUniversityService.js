const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const University = require('../models/University');
const Student = require('../models/Student');


const universityRegister = async (userdata) => {
  const {name, location, description, logo, phone_number, user_id} = userdata
  try {
    const user = await User.findOne({ where: { id : user_id } });
    console.log(user)
    
    if (user && user.dataValues.role === 'admin') {
      const university = await University.create({name, location, description, logo, phone_number, user_id});
      console.log(university);
      return university;
    } else {
      throw new Error('User not found or not a admin');
    }
  } catch (error) {
    console.error(error);
    throw new Error('Error during registration');
  }
};

const universityLogin = async ({ email, password }) => {
  try {
    const university = await University.findOne({ where: { email } });
    
    if (!university || !await bcrypt.compare(password, university.password)) {
      throw new Error('Invalid credentials');
    }
    
    const token = jwt.sign({ id: university.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return token;
  } catch (error) {
    console.log(error);
    throw new Error('Error during login');
  }
};

const updateUniversity = async (id, updateData) => {
  const {name, location, description, logo, phone_number}  = updateData
  try {
    const university = await University.findByPk(id);
    if (!university) {
      throw new Error('University not found');
    }
    const updatedUniversity = await university.update({name, location, description, logo, phone_number});
    return updatedUniversity;
  } catch (error) {
    console.log(error);
    throw new Error('Error during university update');
  }
};

const deleteUniversity = async (id) => {
  try {
    const university = await University.findByPk(id);
    if (!university) {
      throw new Error('University not found');
    }
    await university.destroy();
    return { message: 'University deleted successfully' };
  } catch (error) {
    console.log(error);
    throw new Error('Error during university deletion');
  }
};

module.exports = {
  universityRegister,
  universityLogin,
  updateUniversity,
  deleteUniversity,
};
