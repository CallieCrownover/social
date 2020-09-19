// Requiring our models and passport as we've configured it
const db = require("../models");
const passport = require("../config/passport");
const router = require('express').Router();

    // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
    // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
    // otherwise send back an error
    router.post("/api/signup", (req, res) => {

        db.User.create({
            email: req.body.email,
            password: req.body.password
        })
            .then(() => {
                //res.redirect(307, "/api/Login");
                res.send('Signed up user!')
            })
            .catch(err => {
                console.log(err)
                res.status(401).json(err);
            });
    });

    router.get("/api/getAllEvents",(req,res)=>{
        console.log("made it to get All Events")
        db.Event.find().then(CallieStinks=>{
            console.log("db response")
            console.log(CallieStinks)
            res.json(CallieStinks)
        })
    })

    // Route for logging user out
    // app.get("/logout", (req, res) => {
    //   req.logout();
    //   res.redirect("/");
    // });

    // Route for getting some data about our user to be used client side
    //   app.get("/api/user_data", (req, res) => {
    //     if (!req.user) {
    //       // The user is not logged in, send back an empty object
    //       res.json({});
    //     } else {
    //       // Otherwise send back the user's email and id
    //       // Sending back a password, even a hashed password, isn't a good idea
    //       res.json({
    //         email: req.user.email,
    //         id: req.user.id
    //       });
    //     }
    //   });
module.exports = router;
