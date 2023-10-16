const mongoose = require('mongoose');
var cartSchema = new mongoose.Schema({
    productID:{
        type:mongoose.Schema.Types.ObjectId,
    },
    quantity:{
        type:Number,
        required: true
    },
    userID:{
        type : mongoose.Schema.Types.ObjectId , 
        required: true // this is the id of user who added to cart
    },
    dateAdded:{
        type:Date,default: Date.now()
    },
    status: {
        type: String,
        enum: ['pending', 'completed', 'cancelled'],
        default: 'pending'
    },
    discountCode: {
        type: String,
        default: null // Mặc định là null, khi không có mã giảm giá
      }
});

module.exports = mongoose.model('cart', cartSchema);