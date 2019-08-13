const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Registration = mongoose.model('Registration');

//Page Navigation -- Routing
router.get('/',(req,res) => {
    res.render("registration/addUser",{
        viewTitle : "Insert User"
    });
});

router.post('/',(req,res) => {
    insertData(req,res);
});

//Function to Insert the New User in DB.
function insertData(req,res){
    var registration = new Registration();
    registration.fullName = req.body.fullName;
    registration.mail = req.body.mail;
    registration.mobile = req.body.mobile;
    registration.department = req.body.department;
    registration.save((err,doc) => {
        if(!err)
        res.redirect('registration/list');
        else
        console.log('Error while adding New User : '+err);
    });
}

//Routing to Next Page after user registration.
router.get('/list',(req,res) => {
    res.json('Next Page');
});

module.exports = router;
