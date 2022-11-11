const dbConfig = require("../db");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.Accountmodel = require("./account")(mongoose);
db.Profilemodel = require("./profile")(mongoose);
// db.Marketing = require("./marketing")(mongoose);
// db.SocialMedia = require("./socialmedia")(mongoose);
module.exports = db;