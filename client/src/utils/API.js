import axios from "axios";

export default {
  // Gets all events
  getEvents: function() {
    return axios.get("/api/events");
  }
};