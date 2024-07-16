const userService = require('../services/authService');

const registerUser = async (req, res) => {
  try {
    const { email, password, role } = req.body;
    const user = await userService.register({ email, password, role });
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const loginUser = async (req, res) => {
  try {
    const token = await userService.login(req.body);
    res.send({ token });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;
    const updatedUser = await userService.updateUser(id, updateData);
    res.send(updatedUser);
  } catch (error) {
    console.log(error);
    res.status(400).send(error.message);
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await userService.deleteUser(id);
    res.send({ message: 'User deleted successfully' });
  } catch (error) {
    console.log(error);
    res.status(400).send(error.message);
  }
};

module.exports = {
  registerUser,
  loginUser,
  updateUser,
  deleteUser,
};
