import axios from "axios";


export default {

  // Gets all events
  getEvents: function() {
    return axios.get("/api/getAllEvents")
  },

  eventSignUp: function(eventId){
    console.log("eventId")
    console.log(eventId)
    console.log('session storage')
    let userId = sessionStorage.getItem("id")
    console.log(userId)
let data ={
  eventId:eventId,
  userId:userId
}
    return axios.post("/api/eventSignUp/",data)
  },
  // getTestEvents: function(){
  //   return axios.get("/api/getAllEvents")
  // },
  saveUser: function(user) {
    return axios.post("/api/signup", user)
  },
  createEventForm: function(user) {
    return axios.post("/api/createform", user)
  }, 
  
  getMyEvents: function(event) {
    return axios.get("/api/getMyEvents", event)
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
