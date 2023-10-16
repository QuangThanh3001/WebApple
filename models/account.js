const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
    name: {
        type : String,
        required :true
    },
    email: {
        type : String,
        required :true
    },

    password: {
        type : String,
        required :true
    },
    image: {
        type : String,
        required :true
    },
    role: {
        type: String,
    }

});
module.exports = mongoose.model('accounts', accountSchema);