const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const { ROLE } = require('../utils/constants');
const { common } = require('./Common');
const usersBase = {
    username: {
        type: String, trim: true, required: true,
    },
    password: {
        type: String, trim: true, required: true,
    },
    email: {
        type: String, trim: true, required: true,
    },
    fullName: {
        type: String, trim: true,
    },
    sex: {
        type: String, trim: true,
    },
    dob: {
        type: String, trim: true,
    },
    address: {
        type: String, trim: true,
    },
    isAdmin: {
        type: Boolean, default: false,
    }
}
const users = { ...usersBase, ...common };
const UsersSchema = new Schema(users, { versionKey: false });
const UsersModels = mongoose.model('users', UsersSchema);
module.exports = UsersModels;