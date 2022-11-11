const express = require('express');
const Profilemodel = require('../model/profile');
const Profilerouter = express.Router();
// Create data
Profilerouter.post('/add', function(req,res,next) {
  let firstname = req.body.firstname;
  let lastname = req.body.lastname;
  let email = req.body.email;
  
  let newProfile = new Profilemodel({
    firstname: firstname,
    lastname : lastname, 
    email : email,
  });
  newProfile.save(function(err,newProfile) {
     if(err) {
      res.send({ status:500,message:'Unable to add Profile'}); 
     }
     else {
      res.send({ status:200,message:'Added Data', Details : newProfile});
     }
  });
});
// Fetching all data
Profilerouter.get('/details', function(req, res,next) {
  Profilemodel.find(function(err,Profiledetails){
    if(err) {
      res.send({ status:500,message:'Unable to find Profiles'}); 
     }
     else {
      const recordCount = Profiledetails.length;
      res.send({ status:200,recordCount:recordCount ,details:Profiledetails});
     }
  })
});
//Fetching specific data
Profilerouter.get('/single', function(req, res,next) {
  const userId = req.query.userId;
  Profilemodel.findById(userId,function(err,Profiledetail){
    if(err) {
      res.send({ status:500,message:'Unable to find Profile'}); 
     }
     else {
      res.send({ status:200,details:Profiledetail});
     }
  })
});
//Update existing data
Profilerouter.put('/update', function(req, res,next) {
  const userId = req.body.userId;
  let newProfile = {
    firstname : req.body.firstname,
    lastname : req.body.lastname,
    email : req.body.email,
    mob : req.body.mob
  };
  Profilemodel.findByIdAndUpdate(userId,newProfile,function(err,Profileupdate){
    if(err) {
      res.send({ status:500,message:'Unable to Update Profile'}); 
     }
     else {
      res.send({ status:200,details:newProfile});
     }
  })
});
//Delete
Profilerouter.delete('/delete', function(req, res,next) {
  const userId = req.query.userId;
  Profilemodel.findByIdAndDelete(userId,function(err,Profiledetail){
    if(err) {
      res.send({ status:500,message:'Unable to Delete Profile'}); 
     }
     else {
      res.send({ status:200,message:'Deleted Successfully',details:Profiledetail});
     }
  })
});
//Delete multiple
Profilerouter.delete('/delete-multiple', function(req, res,next) {
  const userId = req.query.userId;
  Profilemodel.deleteMany({'firstname' : 'Sru'},function(err,Profiledetail){
    if(err) {
      res.send({ status:500,message:'Unable to Delete Profile'}); 
     }
     else {
      res.send({ status:200,message:'Deleted Successfully',details:Profiledetail});
     }
  })
});
module.exports = Profilerouter
