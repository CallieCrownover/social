const mongoose = require("mongoose");
const db = require("../models");

//connects to the mongo database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/social");

//user seed
const userSeed = [
  {
    username: "username",
    email: "email",
    password: "password",
  },
];

//event seed
const eventSeed = [
  {
    eventName: "Axe Throwing",
    location: "Bad Axe Throwing",
    description: "Come join us to throw a bunch of axes!",
    date: "October 17th, 2020",
    time: "4pm-9pm",
  },
  {
    eventName: "Hiking Crowders Mountain",
    location: "Crowders Mountain",
    description: "Become one with nature",
    date: "October 20th, 2020",
    time: "8am",
  },
  {
    eventName: "Sip and Paint",
    location: "Tipsy Paintbrush",
    description: "Painting the night away while sipping on some wine!",
    date: "November 11th, 2020",
    time: "5pm-8pm",
  },
  {
    eventName: "Yoga at Dawn",
    location: "Freedom Park",
    description:
      "Get your zen on! Come do yoga at dawn with us and stretch the day away.",
    date: "September 30th, 2020",
    time: "5am-7am",
  },
];

//if there is anything in the event table, clear it. then add this event seed into this collection / table. if it's successful, it will say "event inserted".
db.User
.remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then((data) => {
    console.log(data.result.n + " user inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

db.Event
.remove({})
  .then(() => db.Event.collection.insertMany(eventSeed))
  .then((data) => {
    console.log(data.result.n + " event inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
