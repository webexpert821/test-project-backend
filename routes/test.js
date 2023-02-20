const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();

router.get('/', async(req, res) => {
    res.status(200).json({ message: "Server is working" });
});



module.exports = router