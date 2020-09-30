// Requiring our models and passport as we've configured it
const db = require("../models");
const passport = require("../config/passport");
const router = require("express").Router();
const mongojs = require("mongojs")

// Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
// how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
// otherwise send back an error
router.post("/api/signup", (req, res) => {
  db.User.create({
    email: req.body.email,
    password: req.body.password,
  })
    .then((response) => {
        console.log("pineapples and potatoes");
    //   res.redirect(307, "/api/Events");
      res.json(response._id);
    })
    .catch((err) => {
      console.log(err);
      res.status(401).json(err);
    });
});

router.get("/api/getAllEvents", (req, res) => {
  console.log("made it to get All Events");
  db.Event.find().then((CallieStinks) => {
    console.log("db response");
    console.log(CallieStinks);
    res.json(CallieStinks);
  });
});

router.post("/api/eventSignUp", (req, res) => {
  const eventId = req.body.eventId;
  let userId = req.body.userId

  console.log("eventid below")
  console.log(eventId)
  console.log("user below")
  console.log(userId)
db.Event.findOneAndUpdate({category: "Not Axe Throwing"},{$push:{participants:"Axe Throwing"}}, {upsert: true}).then(response=>{
    console.log("please work")
    console.log(response)
})
});

router.post("/api/createform", (req, res) => {
  console.log("made it to the api create event");
  db.Event.create({
    eventName: req.body.eventName,
    location: req.body.location,
    date: req.body.date,
    time: req.body.time,
    category: req.body.category,
    host: req.body.host,
    // add a form entry for host on the components page
    description: req.body.description,
  })
    .then(() => {
      //res.redirect(307, "/api/Login");
      res.send("Event added!");
    })
    .catch((err) => {
      console.log(err);
      res.status(401).json(err);
    });
});

module.exports = router;
