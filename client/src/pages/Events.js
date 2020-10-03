import React, { useState, useEffect } from "react"; 
import EventCard from "../components/EventCard";
import NavMenu from "../components/NavBar";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";
import EventsHeader from "../components/EventsHeader"
function Event() {

const [events, setEvents] = useState([]);

  useEffect(() => {
    loadEvents()
  }, []);
  
  function loadEvents() {
    const res = API.getEvents().then(results=>{
      console.log(results.data);
      console.log(res);
      setEvents(results.data)
    })
  };

  return(
    <div>
    <Jumbotron className="jumbo"/>
    <NavMenu />
    <div className="container">
      <div className="row">
      <div className="col-md-12">
      <EventsHeader />
      </div>
      </div>
      <div className="row">
    {events.map(event => (
          <div className="col-md-4">
          <EventCard
            id={event._id}
            key={event._id}
            name={event.eventName}
            category={event.category}
            location={event.location}
            description={event.description}
            date={event.date}
            time={event.time}
          />
         </div>
    ))}
    </div>
    </div>
    </div>
  )
}

export default Event; 

