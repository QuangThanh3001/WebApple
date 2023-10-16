const iphones = require('../models/iphone');
const reviews = require('../models/ reviews');


//hiển thị trang chi tiết sản phẩm 
var index = async function (req, res, next) {
    try {
        res.render('infor',{listReviews})
    } catch (error) {
        res.status(500).send('error 1'); 
    }  
}


// chi tiet san pham
var detail = async function (req, res, next) {
    var productId =  req.params.id;
    try {
        const listReviews = await reviews.find({});
        const product = await iphones.findById(productId);
        res.render('infor',{product, listReviews});
    } catch (error) {
        res.status(500).send('error 1'); 
    }
}



module.exports = {index,detail}