const express = require('express');
const router = express.Router();
const multer = require('multer');
const AccountController = require('../controllers/account');
const HomeController = require('../controllers/home');
const iPhoneAll = require('../controllers/iphone');
const mobileIphone = require('../models/iphone');
const Cart = require('../controllers/cart');
const ProductController = require('../controllers/productController');

//image upload
var storage = multer.diskStorage({
   destination: function(req, file, cb) {
      cb(null,'./public/img');
   },
   filename: function(req, file, cb) {
      cb(null,file.fieldname+ "_"+Date.now()+"_"+file.originalname);
   },
});

var upload = multer({
   storage: storage,
}).single('image');


// Xử lý đăng ký
router.post('/registration', upload, AccountController.resgitration );

//xử lý đăng nhập 
router.post('/login',AccountController.login);

 //xử lý đăng xuất
 router.get('/logout',AccountController.logout);


//lấy ra trang chủ
router.get('/',HomeController.display );
//Trang infor
router.get('/infor',ProductController.index );
router.get('/infor/:id',ProductController.detail);
//lấy ra trang đăng nhập 
router.get('/accounts/login', HomeController.displayLogin);
//lấy ra trang đăng ký
router.get('/accounts/registration', HomeController.displayRegistration);
//lấy ra trang iPhone
router.get('/mobile/iphone',async (req, res)=>{
   try {
      const mbIphone = await mobileIphone.find({}).limit(4).exec();
      res.render("mobile/iphone",{mbIphone});
   } catch (error) {
      res.status(500).send('error');    
   }
     
});
//iphone 15 
router.get('/mobile/alliphone/iphone15',iPhoneAll.iPhone15);

//iphone 14

router.get('/mobile/alliphone/iphone14',iPhoneAll.iPhone14);

router.post('/review',HomeController.viewStar);

// cart
router.get('/home/cart', Cart.cart)



router.get('/set_session', (req, res)=>{
   req.session.cart = {
      
   }
})
module.exports = router;
