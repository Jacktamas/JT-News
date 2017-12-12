// const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const mongoose = require('mongoose');
const logger = require("morgan");
const PORT = process.env.PORT || 8080;
const request = require('request');
// const db = require("./models");

mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/articlesdb", {
  useMongoClient: true
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log(' we\'re connected!')
});

app.set("view engine", "handlebars");
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.use(express.static("public"));
// BodyParser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
require("./routes/apiRoutes.js")(app);
require("./routes/htmlRoutes.js")(app);

app.listen(PORT, () => {
  console.log("App listening on PORT " + PORT);
});
