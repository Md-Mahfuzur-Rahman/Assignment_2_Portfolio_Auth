/*  
File name: contacts.js of models
Student’s Name: Mahfuzur Rahman
StudentID : 301336576
Date : Feb 24 2023 
*/

let mongoose = require('mongoose');

//create model class
let contactsModel = mongoose.Schema({
    contactname : String,
    contactnumber : Number,
    emailaddress : String
},
{
    //collection:"contacts"
    collection:"collection_contacts"
}
)

module.exports = mongoose.model('Contacts', contactsModel);