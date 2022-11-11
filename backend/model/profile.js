const mongoose = require('mongoose');
const profileSchema = mongoose.Schema({
  firstname: String,
  lastname : String,
  email : String,
 
});
const Profilemodel = mongoose.model("Profile", profileSchema)
module.exports = Profilemodel;