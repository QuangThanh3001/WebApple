const Accounts = require('../models/account');
const bcrypt = require('bcrypt');
//xử lý đăng ký
var resgitration = async  function (req, res, next) {
    try {
        const saltRounds = 10; // Số vòng mã hóa
        const plainTextPassword = req.body.password; // Lấy mật khẩu từ biểu mẫu đăng ký
    
        // Mã hóa mật khẩu trước khi lưu vào cơ sở dữ liệu
        bcrypt.hash(plainTextPassword, saltRounds, async (err, hash) => {
          if (err) {
            console.error(err);
            res.status(500).send('Lỗi mã hóa mật khẩu');
          } else {
            const accountNew = new Accounts({
              name: req.body.name,
              email: req.body.email,
              password: hash, // Lưu hash mật khẩu vào cơ sở dữ liệu
              role: req.body.role,
              image: req.file.filename,
            });
            await accountNew.save();
            res.redirect('accounts/login');
          }
        });
      } catch (error) {
        console.log(error);
        res.status(500).send('Lỗi');
      }
}

// xử lý đăng nhập 
var login = async function (req, res, next) {
    const loginNew = new Accounts({
        email: req.body.email,
        password: req.body.password,
      });
    
      const user = await Accounts.findOne({ email: loginNew.email });
      if (!user) {
        return res.status(401).send('Email hoặc mật khẩu không đúng');
      }
      const isPasswordValid = await bcrypt.compare(loginNew.password, user.password);
      if (isPasswordValid) {
         res.cookie('userId', user._id);
         global.login = true;
         global.user = user;
         res.render('index');
      }else{
      return res.status(401).send('Email , mật khẩu không đúng');
      }
}

//xử lý logout

var logout = function (req, res, next) {
    res.clearCookie("userId");
    global.login = false;
    res.redirect('/');
}

module.exports= {resgitration, login, logout};

