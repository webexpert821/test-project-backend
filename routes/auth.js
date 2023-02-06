const express = require('express')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express();
const config = require('config');
const Users = require('../models/Users');

const auth = require('../middleware/auth');

router.post('/', async(req, res) => {
    const { email, password } = req.body;
    try {
            let user = await Users.findOne({ email });
            if (!user) {
                return res.status(404).json({ msg: 'Invalid credentials' });
            }

            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(404).json({ msg: 'Invalid credentials' });
            }

            const payload = {
                user: user
            };

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
        } catch (err) {
            console.error(err.message);
            return res.status(404).json({ msg: 'Server error' });
        }
})

module.exports = router;