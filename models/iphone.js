const mongoose = require('mongoose');
var iphoneSchema = new mongoose.Schema({
    iPhoneName: {
        type : String,
        required: true
    },
    iPhonePrice:{
        type: String,
        required: true
    },
    Color: {
        type:Array ,
    },
    Thumbnail: {
        type: Array,
        required: true
    },
    iPhoneStatus:{
        type: String
    },
    iPhoneConfig:{
        type: String
    },
 
    
});

module.exports = mongoose.model('iphones', iphoneSchema);