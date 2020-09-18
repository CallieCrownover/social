const express = require("express");
const passport = require("./config/passport");
const mongoose = require("mongoose");

//UNCOMMENT AFTER ROUTES  ARE CREATED
// const routes = require("./routes/api");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// using passport library
app.use(passport.initialize());
app.use(passport.session());

//UNCOMMENT AFTER ROUTES ARE CREATED
// app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/social");

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});