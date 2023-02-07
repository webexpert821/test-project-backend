// importing modules
const { Sequelize, DataTypes } = require("sequelize");

// Database connection with dialect of postgres specifying the database we are using
//port for my database is 5433
//database name is users

const sequelize = new Sequelize(`postgres://postgres:123456@localhost:5432/users`, { dialect: "postgres" } ); 


//checking if connection is done
sequelize.authenticate().then(() => {
    console.log(`Database connected to users`)
}).catch((err) => {
    console.log(err);
})

const db = {}

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//connecting to model
db.users = require('./Users')(sequelize, DataTypes)

//exporting the module
module.exports = db