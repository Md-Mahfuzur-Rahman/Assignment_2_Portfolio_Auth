/*  
File name: contacts.js of controllers
Student’s Name: Mahfuzur Rahman
StudentID : 301336576
Date : Feb 24 2023 
*/

// let express = require('express');        not used
// let router = express.Router();           not used
// let mongoose = require('mongoose');      not used

//Create a reference to the model

let Contacts = require('../models/contacts');

module.exports.displayContactList = (req, res, next)=>{
    Contacts.find((err, contactsList)=>{
        if(err)
        {
            return console.error(err);
        }
        else{              
            res.render('contacts/list', {title:'Contacts', ContactsList : contactsList, displayName:req.user ? req.user.displayName : ''});
        }
    });
}

module.exports.displayAddPage = (req,res,next) =>{
    res.render('contacts/add',{title: 'Add Contact', displayName:req.user ? req.user.displayName : ''})
}

module.exports.processAddPage =  (req, res, next) => {
    let newContacts = Contacts({
           "contactname" : req.body.contactname,
           "contactnumber": req.body.contactnumber,
           "emailaddress": req.body.emailaddress
    }); 

    Contacts.create(newContacts,(err,Contacts)=> {
        if(err){
            console.log(err);
            res.end(err);
        }
        else{
            //refresh the contacts list
            res.redirect('/contacts-list');
        }
       });
    }

    module.exports.displayEditPage =  (req, res, next) => {
        let id = req.params.id;
 
        Contacts.findById(id,(err,contactsToEdit) => {
 
         if(err){
             console.log(err);
             res.end(err);
         }
         else{
 
             //show the edit view
             res.render('contacts/edit', {title: 'Edit Contact', contacts:contactsToEdit, displayName:req.user ? req.user.displayName : ''})
         }
 
        });
 }

 module.exports.processEditPage = (req, res, next) => {

    let id = req.params.id;
    let updatedContacts = Contacts({
        "_id":id,
        "contactname" : req.body.contactname,
        "contactnumber":req.body.contactnumber,
        "emailaddress": req.body.emailaddress        
    });
    
    Contacts.updateOne({_id: id},updatedContacts,(err) =>{
        if(err){
            console.log(err);
            res.end(err);
        }
        else{
           //refresh the contacts list
           res.redirect('/contacts-list');
        }
    });    
    }


    module.exports.performPage =  (req, res, next) => {

        let id = req.params.id;
        Contacts.remove({_id: id},(err) =>{
            if(err){
                console.log(err);
                res.end(err);
            }
            else{
               //refresh the contacts list
               res.redirect('/contacts-list');
            }
        });
    }




    