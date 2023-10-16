const AdminProduct = require('../../models/iphone');

const disPlay = function (req, res, next) {
    res.render('admin/index');
}

//admin/prodcut/index
const addProduct = async function (req, res, next) {
    try {
        const newProduct = await AdminProduct.find({});
        res.render('admin/product/', {newProduct});
     } catch (error) {
        res.status(500).send('error');    
     }
};

// Created product iphone

const createIphone = async function (req, res, next) {
    try {
        const iphoneNew = new AdminProduct({
           iPhoneName: req.body.iphoneName,
           iPhonePrice: req.body.iphonePrice,
           Color: req.body.color,
           Thumbnail: req.body.thumbnail,
           iPhoneStatus:req.body.iphoneStatus,
           iPhoneConfig:req.body.iphoneConfig
        });
        await iphoneNew.save();
        res.redirect('/admin/product')
     } catch (error) {
        console.log(error);
        res.status(500).send('Lỗi');
     }
};


//GET edit 
const editIphone = async function (req, res, next) {
   var id = req.params.id;
   try {
     var iphone = await AdminProduct.findById(id);
     res.render('admin/product/edit',{iphone});
   } catch (error) {
      res.status(500).send('Lỗi');
   }
}
//POST edit
const updateIphone = async function (req, res, next) {
   const productId = req.params.id;
  const { phoneName, phonePrice, phoneColor, phoneThumbnail, phoneStatus, phoneConfig } = req.body;

  try {
    const updatedProduct = await AdminProduct.findByIdAndUpdate(
      productId,
      {
        iPhoneName: phoneName,
        iPhonePrice: phonePrice,
        Color: phoneColor.split(","),
        Thumbnail: phoneThumbnail.split(","),
        iPhoneStatus: phoneStatus,
        iPhoneConfig: phoneConfig
      },
      { new: true }
    );

    res.redirect('/admin/product'); // Redirect to the home page or any other page you want
  } catch (error) {
    res.status(500).send('Lỗi server');
  }
};

//Delete Product
const deleteProduct = async function (req, res, next) {
   var id=req.params.id;
   try {
     var deleteProduct = await AdminProduct.findByIdAndRemove(id);
     res.redirect('/admin/product');
   } catch (error) {
     res.status(500).send('Lỗi server');
   }
}
module.exports = {disPlay, addProduct, createIphone ,editIphone, updateIphone, deleteProduct};