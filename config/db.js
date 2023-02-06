const mongoose = require('mongoose');
const config = require('config');
const mongoURI = config.get('mongoURI');

const connectDB = () => {
    try {
        mongoose.connect(mongoURI, {useNewUrlParser: true }).then(
            () => console.log("MongoDB Connected...")
        );
    } catch (err) {
        console.log(err.message);
        process.exit(-1);
    }
}

module.exports = connectDB