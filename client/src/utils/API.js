import axios from "axios";

const testEvents = [
  { 
    id: 1,
    eventName: "Axe Throwing",
    location: "Bad Axe Throwing",
    description: "Come join us to throw a bunch of axes!",
    date: "October 17th, 2020",
    time: "4pm-9pm",
    image: "https://media.istockphoto.com/photos/bowling-picture-id480732472?k=6&m=480732472&s=612x612&w=0&h=5NOYSs5huZiVrj0FanxaB2feafYLKj2qzVyzEXqeydI="
  },
  { 
    id: 2,
    eventName: "Hiking Crowders Mountain",
    location: "Crowders Mountain",
    description: "Become one with nature",
    date: "October 20th, 2020",
    time: "8am",
    image: "https://media.istockphoto.com/photos/bowling-picture-id480732472?k=6&m=480732472&s=612x612&w=0&h=5NOYSs5huZiVrj0FanxaB2feafYLKj2qzVyzEXqeydI="
  },
  {
    id: 3,
    eventName: "Sip and Paint",
    location: "Tipsy Paintbrush",
    description: "Painting the night away while sipping on some wine!",
    date: "November 11th, 2020",
    time: "5pm-8pm",
    image: "https://media.istockphoto.com/photos/bowling-picture-id480732472?k=6&m=480732472&s=612x612&w=0&h=5NOYSs5huZiVrj0FanxaB2feafYLKj2qzVyzEXqeydI="
  },
  {
    id: 4,
    eventName: "Yoga at Dawn",
    location: "Freedom Park",
    description:
      "Get your zen on! Come do yoga at dawn with us and stretch the day away.",
    date: "September 30th, 2020",
    time: "5am-7am",
    image: "https://media.istockphoto.com/photos/bowling-picture-id480732472?k=6&m=480732472&s=612x612&w=0&h=5NOYSs5huZiVrj0FanxaB2feafYLKj2qzVyzEXqeydI="
  },
]

export default {

  // Gets all events
  getEvents: function() {
    return axios.get("/api/events")
  },

  getTestEvents: function(){
    return testEvents
  }
}

//   // Gets all books
//   getBooks: function() {
//     return axios.get("/api/books");
//   },
//   // Gets the book with the given id
//   getBook: function(id) {
//     return axios.get("/api/books/" + id);
//   },
//   // Deletes the book with the given id
//   deleteBook: function(id) {
//     return axios.delete("/api/books/" + id);
//   },
//   // Saves a book to the database
//   saveUsers: function(userData) {
//     return axios.post("/api/books", userData);
