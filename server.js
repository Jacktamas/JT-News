const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const app = express();
const mongojs = require('mongojs');
const PORT = process.env.PORT || 8080;
const request = require('request');

var databaseUrl = "newsdb";
var collections = ["articles"];
const db = mongojs(databaseUrl, collections);

db.on('error', function (err) {
    console.log('database error', err)
})

db.on('connect', function () {
    console.log('database connected')
})

app.set("view engine", "handlebars");
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.use(express.static("public"));
// BodyParser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Routes
// require("./routes/apiRoutes.js")(app);
require("./routes/htmlRoutes.js")(app);

app.listen(PORT, () => {
  console.log("App listening on PORT " + PORT);
});
