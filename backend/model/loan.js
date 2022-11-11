const mongoose = require('mongoose');
const loanSchema = mongoose.Schema({
  loanid: Number,
  purposeofloan : String,
  status : String,
 
});
const Loanmodel = mongoose.model("Loan", loanSchema)
module.exports = Loanmodel;