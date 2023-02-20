const express = require('express')
const db = require('../models')

const User = db.Users;

//Function to check if username or email already exist in the database
//this is to avoid having two users with the same username and email

 const saveUser = async (req, res, next) => {
    //search the database to see if user exist
    try {
        const email= await User.findOne({
            where: {
                email: req.body.email,
            },
        });
        //if email exist in the database respond with a status of 409
        if (email) {
            return res.status(409).json("email already taken");
        }
        next();
    } catch(err) {
        console.log(err)
    }
}

//exporting module
 module.exports = {
    saveUser,
};