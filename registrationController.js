const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Registration = mongoose.model('Registration');

//Get the data from User registration page.
router.get('/',(req,res) => {
    res.render("registration/addUser",{
        viewTitle : "Insert User"
    });
});

//Post the Collected data from User registration page and save it in the Mongo DB.
router.post('/',(req,res) => {
    insertData(req,res);
});

//Function to Insert the New User in DB.
function insertData(req,res){
    var registration = new Registration();
    registration.fullName = req.body.fullName;
    registration.mail = req.body.mail;
    //console.log(registration.mail);
    registration.mobile = req.body.mobile;
    registration.department = req.body.department;
    registration.save((err,doc) => {
        if(!err)
        res.redirect('registration/list');
        else
        {
            if(err.name == 'validationError'){
            handleValidationError(err,req.body);
            res.render("registration/addUser",{
                viewTitle : "Insert User",
                registration : req.body
            });
            console.log(registration.departmentError);
            }
            else{
            console.log('Error while adding New User : '+err);
            }
        }
    });
}

//Routing to Next Page after user registration.
router.get('/list',(req,res) => {
    res.json('Next Page');
});

//Function to handle Validation error
function handleValidationError(err,body){
for (field in err.errors){
    switch(err.errors[field].path){
        case 'fullName':
            body['fullNameError'] = err.errors[field].message;
            break;
        case 'mail':
            body['mailError'] = err.errors[field].message;
            break;
        case 'mobile':
            body['mobileError'] = err.errors[field].message;
            break;
        case 'department':
            body['departmentError'] = err.errors[field].message;
            break;
        default:
            break;
    }
}
}

module.exports = router;
