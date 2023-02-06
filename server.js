const express = require('express')
const connectedDB = require('./config/db');

const app = express().use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
})

connectedDB();

// Init Middlewares
app.use(express.json({ extended: false }));

app.use("/", require('./routes/index'))
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`);
});