require('./models/db');

const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyparser = require('body-parser');
const registrtaionController = require('./controller/registrationController');

var app = express();

//Body Parser to get the URL Requested data.
app.use(bodyparser.urlencoded({
    extended : true
}));
app.use(bodyparser.json());

//Creating View Layout using Express-HandleBars.
app.set('views',path.join(__dirname,'/views'));
app.engine('hbs',exphbs({extname: 'hbs',defaultLayout: 'mainLayout',layoutsDir: __dirname + '/views/layouts'}));
app.set('view engine','hbs');

//Express Connection.
app.listen(3000, () => {
    console.log('Express Connection Successfull...!!!');
});

//Page Routing
app.use('/registration',registrtaionController);
