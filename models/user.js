//importing the libraries being used in this file.
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//creating the table that goes into the database. this will be in the social database.
const userSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true }
});

//table in the database
const User = mongoose.model("User", userSchema);

//exporting database Event
module.exports = User;