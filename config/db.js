const mongoose = require('mongoose');

const connectDB = async() => {
    try {
        const conn = await mongoose.connect(
            "mongodb+srv://shreyansh2113042:xKB46TAkcF2iNiGl@test-pro-db.6cset.mongodb.net/?retryWrites=true&w=majority&appName=test-pro-db", {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true
        })
        console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline);
    } catch (error) {
        console.error(`Error : ${error.message}`.red.underline.bold)
        process.exit(1)
    }
}

module.exports = connectDB


