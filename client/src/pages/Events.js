import React, { useState, useEffect } from "react"; 
import EventCard from "../components/EventCard";
import API from "../utils/API";
// import {
//   Container,
//   Row,
//   Col
// } from "reactstrap";
import Jumbotron from "../components/Jumbotron";

function Event() {

  // Setting our component's initial state
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
const [testEvents, setTestEvents] = useState([]);

  useEffect(() => {
    loadTestEvents()
  }, []);
  
  function loadTestEvents() {
    const res = API.getTestEvents().then(results=>{
      console.log(results.data)
      setTestEvents(results.data)
    })
       // setTestEvents(res)
      
  };
//  API.getTestEvents = id => {
//     const events = events.map(event => event.id !== id);
//     // Set this.state.friends equal to the new friends array
//     setTestEvents(events)
//   }
  return(
    <div>
    <Jumbotron className="jumbo"/>
    <div className="d-flex justify-content-around">
    {testEvents.map(event => (
          <div className="d-flex justify-content-around">
          <EventCard
            id={event._id}
            key={event._id}
            name={event.eventName}
            image={event.image}
            location={event.location}
            description={event.description}
            date={event.date}
            time={event.time}
          />
          </div>
    ))}
    </div>
    </div>
  )
}

export default Event; 

