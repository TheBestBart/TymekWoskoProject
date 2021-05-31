const mongoose = require('mongoose');
var Schema = mongoose.Schema;
const shortid = require('shortid');


const UserSchema = new mongoose.Schema({
    _id: {
        type: String,
        default: shortid.generate
    },
    username: {
        type: String,
        unique: true,
        required: true,
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    is_admin: {
        type: Boolean,
        default: false
    }
})

module.exports =  mongoose.model('User', UserSchema);