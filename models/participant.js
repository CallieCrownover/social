//importing the libraries being used in this file.
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//creating the table that goes into the database. this will be in the social database.
const ParticipantSchema = new Schema({
  participant: [{ type: String, required: true}],
  eventName: [{ type: Schema.Types.ObjectId, ref: "Event" }],
  email: { type: Schema.Types.ObjectId, ref: "User" }
});
//table in the database
const Participant = mongoose.model("Participant", ParticipantSchema);
// const Event  = mongoose.model("Event", eventSchema);
// const User = mongoose.model("User", userSchema);
//exporting database Event
module.exports = Participant;

