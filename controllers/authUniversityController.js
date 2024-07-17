const  { universityRegister, universityLogin, updateUniversity, deleteUniversity } = require('../services/authUniversityService');

const registerUniversity = async (req, res) => {
  try {
    const  {name, location, description, logo, phone_number, user_id} = req.body;
    const university = await universityRegister({name, location, description, logo, phone_number, user_id});
    res.status(201).send(university);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const loginUniversity = async (req, res) => {
  try {
    const token = await universityLogin(req.body);
    res.send({ token });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const universityUpdate = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;
    const updatedUniversity = await updateUniversity(id, updateData);
    res.send(updatedUniversity);
  } catch (error) {
    console.log(error);
    res.status(400).send(error.message);
  }
};

const universityDelete = async (req, res) => {
  try {
    const { id } = req.params;
    await deleteUniversity(id);
    res.send({ message: 'University deleted successfully' });
  } catch (error) {
    console.log(error);
    res.status(400).send(error.message);
  }
};

module.exports = {
  registerUniversity,
  loginUniversity,
  universityUpdate,
  universityDelete,
};
