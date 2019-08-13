const mongoose = require('mongoose');

var regSchema = new mongoose.Schema({
    fullName : {
        type : String,
        required : 'Full Name is Mandatory.'
    },
    mail : {
        type : String,
        required : 'Email is Mandatory.'
    },
    mobile : {
        type : String,
        required : 'Mobile No is Mandatory.'
    },
    department : {
        type : String,
        required : 'Department is Mandatory.'
    }
});

//Validation for email id Structure.
regSchema.path('mail').validate((val) => {
emailRegex = /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/;
return emailRegex.test(val);
},'Invalid e-mail id.');

mongoose.model('Registration',regSchema);
