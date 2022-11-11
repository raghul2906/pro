const express = require('express');
const Loanmodel = require('../model/loan');
const Loanrouter = express.Router();
// Create data
Loanrouter.post('/add', function(req,res,next) {
  let loanid = req.body.loanid;
  let purposeofloan = req.body.purposeofloan;
  let status = req.body.status;
  
  let newLoan = new Loanmodel({
    loanid: loanid,
    purposeofloan : purposeofloan, 
    status : status,
  });
  newLoan.save(function(err,newLoan) {
     if(err) {
      res.send({ status:500,message:'Unable to add Loan'}); 
     }
     else {
      res.send({ status:200,message:'Added Data', Details : newLoan});
     }
  });
});
// Fetching all data
Loanrouter.get('/details', function(req, res,next) {
  Loanmodel.find(function(err,Loandetails){
    if(err) {
      res.send({ status:500,message:'Unable to find Loans'}); 
     }
     else {
      const recordCount = Loandetails.length;
      res.send({ status:200,recordCount:recordCount ,details:Loandetails});
     }
  })
});
//Fetching specific data
Loanrouter.get('/single', function(req, res,next) {
  const userId = req.query.userId;
  Loanmodel.findById(userId,function(err,Loandetail){
    if(err) {
      res.send({ status:500,message:'Unable to find Loan'}); 
     }
     else {
      res.send({ status:200,details:Loandetail});
     }
  })
});
//Update existing data
Loanrouter.put('/update', function(req, res,next) {
  const userId = req.body.userId;
  let newLoan = {
    firstname : req.body.firstname,
    lastname : req.body.lastname,
    email : req.body.email,
    mob : req.body.mob
  };
  Loanmodel.findByIdAndUpdate(userId,newLoan,function(err,Loanupdate){
    if(err) {
      res.send({ status:500,message:'Unable to Update Loan'}); 
     }
     else {
      res.send({ status:200,details:newLoan});
     }
  })
});
//Delete
Loanrouter.delete('/delete', function(req, res,next) {
  const userId = req.query.userId;
  Loanmodel.findByIdAndDelete(userId,function(err,Loandetail){
    if(err) {
      res.send({ status:500,message:'Unable to Delete Loan'}); 
     }
     else {
      res.send({ status:200,message:'Deleted Successfully',details:Loandetail});
     }
  })
});
//Delete multiple
Loanrouter.delete('/delete-multiple', function(req, res,next) {
  const userId = req.query.userId;
  Loanmodel.deleteMany({'firstname' : 'Sru'},function(err,Loandetail){
    if(err) {
      res.send({ status:500,message:'Unable to Delete Loan'}); 
     }
     else {
      res.send({ status:200,message:'Deleted Successfully',details:Loandetail});
     }
  })
});
module.exports = Loanrouter
