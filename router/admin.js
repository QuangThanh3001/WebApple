const express = require('express');
var router = express.Router();
const Admin = require('../controllers/admin/adminController');

// Admin
router.get('/',Admin.disPlay);


router.get('/logout', (req, res)=>{
    req.session = null;
});


//admin/prodcut/index
router.get('/product', Admin.addProduct);

//admin/product/created
router.post('/product/create',Admin.createIphone);

 //admin/product/update
 router.get('/product/edit/:id', Admin.editIphone);
 router.post('/product/edit/:id', Admin.updateIphone);

 // admin/product/delete
router.post('/product/delete/:id',Admin.deleteProduct);
module.exports = router;