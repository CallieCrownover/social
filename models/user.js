//importing the libraries being used in this file.
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Requiring bcrypt for password hashing. Using the bcryptjs version as the regular bcrypt module sometimes causes errors on Windows machines
const bcrypt = require("bcryptjs");
//creating the table that goes into the database. this will be in the social database.
const userSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  // participant: { type: Schema.Types.ObjectId, ref: "Participant" },
  events: [{ type: Schema.Types.ObjectId, ref: "Event" }]
});
//table in the database
const User = mongoose.model("User", userSchema);
// Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
User.prototype.validPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};
//exporting database Event
module.exports = User;