import axios from "axios";


export default {

  // Gets all events
  getEvents: function() {
    return axios.get("/api/getAllEvents")
  },

  eventSignUp: function(eventId){
    return axios.get("/api/eventSignUp/" + eventId)
  },
  // getTestEvents: function(){
  //   return axios.get("/api/getAllEvents")
  // },
  saveUser: function(user) {
    return axios.post("/api/signup", user)
  },
  createEventForm: function(user) {
    return axios.post("/api/createform", user)
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
