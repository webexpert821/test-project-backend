//importing modules
const express = require('express')
const sequelize = require('sequelize')
const dotenv = require('dotenv').config()
const cookieParser = require('cookie-parser')
const db = require("./models")
const userRoutes = require('./routes/userRoutes');

// setting up your port
const PORT = process.env.PORT || 8000

// assigning the variable app to express
const app = express().use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
})

// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

// synchronizing the database and forcing it to false so we don't lose data
// db.sequelize.sync({ force: true }).then(() => {
//     console.log("db has been re sync")
// })

//routes for the user API
app.use('/api/users', userRoutes)
app.use("/test", require("./routes/test"))

//listening to server connection
app.listen(PORT, () => console.log(`Server is connected on ${PORT}`))