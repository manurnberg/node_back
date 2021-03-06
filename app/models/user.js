const mongoose = require('mongoose');

const UserScheme = new mongoose.Schema(
{
    name: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    }
},
{
    timestamps: true,
    versionKey: false,
}

);



module.exports = mongoose.model('user', UserScheme);