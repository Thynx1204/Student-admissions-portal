const express = require('express');
const authStudentController = require('../controllers/authStudentController');

const authStudentRouter = express.Router();

authStudentRouter.post('/register', authStudentController.registerStudent);
authStudentRouter.post('/login', authStudentController.loginStudent);
authStudentRouter.put('/:id/update', authStudentController.studentUpdate);
authStudentRouter.delete('/:id/delete', authStudentController.studentDelete);

module.exports = authStudentRouter;
