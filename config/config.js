const { connect } = require('http2');
const mongoose = require('mongoose');

const DB_URI = 'mongodb://localhost:27017/test';

module.exports = () => {
    mongoose.connect(DB_URI,
        { useNewUrlParser: true, useUnifiedTopology: true, keepAlive: true },
        (err) => {
            if (err) {
                console.log(err);
                process.exit(1);
            } else {
                console.log('Connected to MongoDB');
            }
        }
    );
    connect();
}
