
const ReviewModel = require('../models/ reviews');
var display = function (req, res, next) {
    res.render('index');
}

// Comment
var viewStar = async function (req, res, next) {
    try {
        const newReview=new ReviewModel({
           Rate : req.body.rating,
           Reviews: req.body.comment,
           Name: req.body.name,
           Phone: req.body.phone,
           Email: req.body.email
        });
          await newReview.save();
        // res.send(newReview);
        res.redirect('infor')
       } catch (error) {
        console.log(error);
        res.status(500).send('Lỗi');
       }
};


//lấy ra trang đăng nhập 
var displayLogin = function (req, res, next) {
    res.render('accounts/login')
}
//lấy ra trang đăng ky
var displayRegistration = function (req, res, next) {
    res.render('accounts/registration')
}

module.exports = {display, displayLogin, displayRegistration,viewStar};