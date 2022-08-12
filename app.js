const express = require("express");
const bodyParser = require("body-parser");
// const mongoose = require("mongoose");
const _ = require("lodash");
const app = express();


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));



// Main page
app.get("/", function(req, res){
  res.render("index");
});


// Education page
app.get("/education", function(req, res){
  res.render("education")
});


// Work experience
app.get("/work-experience", function(req, res){
  res.render("work-experience")
});


// Hobbies page
app.get("/hobbies", function(req, res){
  res.render("hobbies")
});





// Contact page
app.get("/contact", function(req, res){
  res.render("contact")
})











app.listen(3000, function() {
  console.log("server started on port 3000.");
});
