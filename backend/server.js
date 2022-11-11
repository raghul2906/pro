const express = require("express");
const cors = require("cors");
const app = express();
const Accountrouter = require('./routes/account.routes');
const Profilerouter = require("./routes/profile.routes");
const Loanrouter = require("./routes/loan.routes");
var corsOptions = {
  origin: "http://localhost:4200"
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
app.use('/account', Accountrouter);
app.use('/profile', Profilerouter);
app.use('/loan', Loanrouter);
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to my application." });
});
app.use('/account', Accountrouter);
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
//database connection
const db = require("./model/index");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });
