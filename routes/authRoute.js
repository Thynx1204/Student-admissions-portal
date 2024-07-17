const express = require('express');
const authController = require('../controllers/authController');

const authRouter = express.Router();

authRouter.post('/register', authController.registerUser);
authRouter.post('/login', authController.loginUser);
authRouter.put('/:id/update', authController.updateUser);
authRouter.delete('/:id/delete', authController.deleteUser);

module.exports = authRouter;
