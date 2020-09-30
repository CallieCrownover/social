//importing the libraries being used in this file.
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//creating the table that goes into the database. this will be in the social database.
const eventSchema = new Schema({
  eventName: { type: String, required: true },
  location: { type: String, required: true },
  description: { type: String, required: true},
  date: { type: String, required: true },
  time: { type: String, required: true },
  category: { type: String, required: true },
  host: { type: Schema.Types.ObjectId, ref: "User" },
  participants: [{ type: Array, ref: "User" }]
});
//table in the database
const Event = mongoose.model("Event", eventSchema);
//exporting database Event
module.exports = Event;
