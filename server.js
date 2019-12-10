const express = require("express");
const bodyParser = require("body-parser")
const app = express();
const mongoose = require('mongoose');
const path = require('path');

mongoose.connect("mongodb://localhost/weather_api");

app.use(express.static( __dirname + '/public/dist/public' ));
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json())


///ROUTES\\\
require('./server/config/routes.js')(app);

// this route will be triggered if any of the routes above did not match
app.all("*", (req,res,next) => {
  res.sendFile(path.resolve("./public/dist/public/index.html"))
});



app.listen(5000, () => console.log("listening on port 5000"));