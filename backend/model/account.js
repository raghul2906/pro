const mongoose = require('mongoose');
const accountSchema = mongoose.Schema({
  firstname: String,
  lastname : String,
  email : String,
  mob : Number,
 
});
const Accountmodel = mongoose.model("Account", accountSchema)
module.exports = Accountmodel;