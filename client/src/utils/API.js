import axios from "axios";

const testEvents = [
  { 
    id: 1,
    eventName: "Axe Throwing",
    location: "Bad Axe Throwing",
    description: "Come join us to throw a bunch of axes!",
    date: "October 17th, 2020",
    time: "4pm-9pm",
    image: 'https://sonoma.edu/sites/www/files/field/image/free_bowling.jpg'
  },
  { 
    id: 2,
    eventName: "Hiking Crowders Mountain",
    location: "Crowders Mountain",
    description: "Become one with nature",
    date: "October 20th, 2020",
    time: "8am",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTs6WBzJ-M6FtmS06K4GvNBoGYSioYFP5Spgw&usqp=CAU"
  },
  {
    id: 3,
    eventName: "Sip and Paint",
    location: "Tipsy Paintbrush",
    description: "Painting the night away while sipping on some wine!",
    date: "November 11th, 2020",
    time: "5pm-8pm",
    image: 'https://media.truelocal.com.au/4/9/42784066-3AAF-45C6-BF44-B6AC6E9C4049/1521284059904_IMG_8143-300x0.jpg'
  },
  {
    id: 4,
    eventName: "Yoga at Dawn",
    location: "Freedom Park",
    description:
      "Get your zen on! Come do yoga at dawn with us and stretch the day away.",
    date: "September 30th, 2020",
    time: "5am-7am",
    image: 'https://ak.picdn.net/shutterstock/videos/1026372254/thumb/1.jpg'
  },
]

export default {

  // Gets all events
  getEvents: function() {
    return axios.get("/api/events")
  },

  getTestEvents: function(){
    return testEvents
  },
  saveUser: function(user) {
    return axios.post("/api/signup", user)
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
