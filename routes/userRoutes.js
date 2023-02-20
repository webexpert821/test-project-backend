//importing modules
const express = require('express')
const userController = require('../controller/usercontroller')
const userAuth = require('../middleware/auth')

const router = express.Router();

const { signup, login, getUser, generateAccessToken } = userController

//signup endpoint
//passing the middleware function to the signup
router.post('/signup', userAuth.saveUser, signup);

//login route yo, all is good, just checking in postman.
router.post('/signin', login );
router.post('/generateAccessToken', generateAccessToken);
router.post('/me', getUser)

module.exports = router