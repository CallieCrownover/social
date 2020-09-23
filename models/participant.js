//importing the libraries being used in this file.
const mongoose = require("mongoose");
const Schema = mongoose.Schema;


//creating the table that goes into the database. this will be in the social database.
const ParticipantSchema = new Schema({
  email: [{ type: String,
    required: true,
    ref: "Event",
    ref: "User"
}]
});

//table in the database
const Participant = mongoose.model("Participant", ParticipantSchema);

//exporting database Event
module.exports = Participant;



