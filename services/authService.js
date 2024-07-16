const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const register = async (userdata) => {
  const { email, password, role} = userdata
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ email, password: hashedPassword, role});
    return user;
  } catch (error) {
    console.log(error);
    throw new Error('Error during registration');
  }
};

const login = async ({ email, password }) => {
  try {
    const user = await User.findOne({ where: { email } });
    
    if (!user || !await bcrypt.compare(password, user.password)) {
      throw new Error('Invalid credentials');
    }
    
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return token;
  } catch (error) {
    console.log(error);
    throw new Error('Error during login');
  }
};

const updateUser = async (id, updateData) => {
  try {
    const user = await User.findByPk(id);
    if (!user) {
      throw new Error('User not found');
    }
    const updatedUser = await user.update(updateData);
    return updatedUser;
  } catch (error) {
    console.log(error);
    throw new Error('Error during user update');
  }
};

const deleteUser = async (id) => {
  try {
    const user = await User.findByPk(id);
    if (!user) {
      throw new Error('User not found');
    }
    await user.destroy();
    return { message: 'User deleted successfully' };
  } catch (error) {
    console.log(error);
    throw new Error('Error during user deletion');
  }
};

module.exports = {
  register,
  login,
  updateUser,
  deleteUser,
};
