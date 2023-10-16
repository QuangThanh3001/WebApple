const mobileIphone = require('../models/iphone');
//lấy ra trang iphone
const iPhone15 = async function (req, res, next) {
    try {
        const iphone15 = await mobileIphone.find({"iPhoneName": /15/i});
        res.render('mobile/alliphone/iphone15',{iphone15});
     } catch (error) {
        res.status(500).send('error');    
     }
};

const iPhone14 = async function (req, res, next) {
    try {
        const iphone14 = await mobileIphone.find({"iPhoneName": /14/i});
        res.render('mobile/alliphone/iphone14',{iphone14});
     } catch (error) {
        res.status(500).send('error');    
     }
};

module.exports = { iPhone15, iPhone14}