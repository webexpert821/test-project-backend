const express = require('express')
const router = express();

router.get("/test", async (req, res) => {
    res.status(200).json("Server is working");
})

module.exports = router;