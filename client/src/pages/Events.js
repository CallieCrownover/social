import React, { useState, useEffect }from "react"; 
import EventCard from "../components/EventCard";
import API from "../utils/API";

function Event() {
  // // Setting our component's initial state
  // const [events, setEvents] = useState([]);

  // // load all events when the page renders
  // useEffect(() => {
  //   loadEvents()
  // }, []);

  //   // function to do a get request from the database
  // function loadEvents() {
  //   API.getEvents()
  //     .then(res => 
  //       console.log(res),
  //       setEvents(res)
  //     )
  //       .catch(err => console.log(err));
  // };

  return(
    <div>
    <EventCard />
    </div>
  )
}

export default Event; 

