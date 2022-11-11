const express = require('express');
const Accountmodel = require('../model/account');
const Accountrouter = express.Router();

// Create data
// Accountrouter.post('/add', function(req,res,next) {
//   let newAccount = new Accountmodel({
//     firstname: 'Sru',
//     lastname : 'Marie',
//     email : 'sru123@mail.com',
//     mob : 638738384,
//   })
//   newAccount.save(function(err,newAccount) {
//      if(err) {
//       res.send({ status:500,message:'Unable to add Account'}); 
//      }
//      else {
//       res.send({ status:200,message:'Added Data', details:newAccount});
//      }
//   })
// });
// // Fetching all data
// Accountrouter.get('/details', function(req, res,next) {
//   Accountmodel.find(function(err,Accountdetails){
//     if(err) {
//       res.send({ status:500,message:'Unable to find Accounts'}); 
//      }
//      else {
//       const recordCount = Accountdetails.length;
//       res.send({ status:200,recordCount:recordCount ,details:Accountdetails});
//      }
//   })
// });

// Create data
Accountrouter.post('/add', function(req,res,next) {
  let firstname = req.body.firstname;
  let lastname = req.body.lastname;
  let email = req.body.email;
  let mob = req.body.mob;
  
  let newAccount = new Accountmodel({
    firstname: firstname,
    lastname : lastname, 
    email : email,
    mob : mob,
  });
  newAccount.save(function(err,newAccount) {
     if(err) {
      res.send({ status:500,message:'Unable to add Account'}); 
     }
     else {
      res.send({ status:200,message:'Added Data', Details : newAccount});
     }
  });
});
// Fetching all data
Accountrouter.get('/details', function(req, res,next) {
  Accountmodel.find(function(err,Accountdetails){
    if(err) {
      res.send({ status:500,message:'Unable to find Accounts'}); 
     }
     else {
      const recordCount = Accountdetails.length;
      res.send({ status:200,recordCount:recordCount ,details:Accountdetails});
     }
  })
});
//Fetching specific data
Accountrouter.get('/single', function(req, res,next) {
  const userId = req.query.userId;
  Accountmodel.findById(userId,function(err,Accountdetail){
    if(err) {
      res.send({ status:500,message:'Unable to find Account'}); 
     }
     else {
      res.send({ status:200,details:Accountdetail});
     }
  })
});
//Update existing data
Accountrouter.put('/update', function(req, res,next) {
  const userId = req.body.userId;
  let newAccount = {
    firstname : req.body.firstname,
    lastname : req.body.lastname,
    email : req.body.email,
    mob : req.body.mob
  };
  Accountmodel.findByIdAndUpdate(userId,newAccount,function(err,Accountupdate){
    if(err) {
      res.send({ status:500,message:'Unable to Update Account'}); 
     }
     else {
      res.send({ status:200,details:newAccount});
     }
  })
});
//Delete
Accountrouter.delete('/delete', function(req, res,next) {
  const userId = req.query.userId;
  Accountmodel.findByIdAndDelete(userId,function(err,Accountdetail){
    if(err) {
      res.send({ status:500,message:'Unable to Delete Account'}); 
     }
     else {
      res.send({ status:200,message:'Deleted Successfully',details:Accountdetail});
     }
  })
});
//Delete multiple
Accountrouter.delete('/delete-multiple', function(req, res,next) {
  const userId = req.query.userId;
  Accountmodel.deleteMany({'firstname' : 'Sru'},function(err,Accountdetail){
    if(err) {
      res.send({ status:500,message:'Unable to Delete Account'}); 
     }
     else {
      res.send({ status:200,message:'Deleted Successfully',details:Accountdetail});
     }
  })
});
module.exports = Accountrouter
