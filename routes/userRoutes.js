//importing modules
const express = require('express')
const userController = require('../controller/usercontroller')
const { signup, login } = userController
const userAuth = require('../middleware/auth')

const router = express.Router()

//signup endpoint
//passing the middleware function to the signup
router.post('/signup', userAuth.saveUser, signup);

//login route yo, all is good, just checking in postman.
router.post('/signin', login )

module.exports = router