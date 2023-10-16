require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const moment = require('moment');
moment().format();
const app = express();
const PORT = process.env.PORT || 5050;
// Phan route
const productRouter = require('./router/routes');
// const adminProductRouter = require('./router/product');
const admin = require('./router/admin');




// het route
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));
app.use(cookieParser());
//database connect
mongoose.connect(process.env.DB_URI)
  .then(() => console.log('Connected!'));

  // app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'ejs');
  app.use('',productRouter);
  app.use('/admin',admin);

app.listen(PORT,()=>
{
    console.log(`server is running on port ${PORT}`);
})
