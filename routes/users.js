const express = require('express')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express();

const Users = require('../models/Users');
const config = require('config');

router.post('/', async (req, res) => {
    try {
        const { firstName, lastName, email, address1, address2, city, state, phone, password } = req.body;

        const query = { email: email }
        const isUserExist = await Users.findOne(query).exec();

        if(isUserExist) {
            return res.status(404).json({ msg: 'User already exists' });
        }

        const salt = await bcrypt.genSalt(10);

        const _password = await bcrypt.hash(password, salt);

        const newUser = new Users({
            firstName: firstName,
            lastName: lastName,
            email: email,
            address1: address1,
            address2: address2,
            city: city,
            state: state,
            phoneNumber: phone,
            password: _password
        })

        await newUser.save();

        const payload = {
            user: newUser
        };

        console.log(payload)

            jwt.sign(
                payload,
                config.get('jwtSecret'),
                { expiresIn: 3600 },
                (err, token) => {
                    if (err) {
                        throw err;
                    }
                    res.json({ token });
                }
            );

    } catch(err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
})

module.exports = router;