const express = require('express');
const authUniversityController = require('../controllers/authUniversityController');

const authUniversityRouter = express.Router();

authUniversityRouter.post('/register', authUniversityController.registerUniversity);
authUniversityRouter.post('/login', authUniversityController.loginUniversity);
authUniversityRouter.put('/:id/update',  authUniversityController.universityUpdate);
authUniversityRouter.delete('/:id/delete', authUniversityController.universityDelete);

module.exports = authUniversityRouter;
