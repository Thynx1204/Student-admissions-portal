const  {studentRegister, studentLogin, updateStudent, deleteStudent } = require('../services/authStudentService');

const registerStudent = async (req, res) => {
  try {
    const {last_name, first_name, address, phone_number, sex, nationality, birthdate, email, password} = req.body;
    const student = await studentRegister({last_name, first_name, address, phone_number, sex, nationality, birthdate, email, password});
    res.status(201).send(student);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const loginStudent = async (req, res) => {
  try {
    const token = await studentLogin(req.body);
    res.send({ token });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const studentUpdate = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;
    const updatedUser = await updateStudent(id, updateData);
    res.send(updatedUser);
  } catch (error) {
    console.log(error);
    res.status(400).send(error.message);
  }
};

const studentDelete = async (req, res) => {
  try {
    const { id } = req.params;
    await deleteStudent(id);
    res.send({ message: 'Student deleted successfully' });
  } catch (error) {
    console.log(error);
    res.status(400).send(error.message);
  }
};

module.exports = {
  registerStudent,
  loginStudent,
  studentUpdate,
  studentDelete,
};
