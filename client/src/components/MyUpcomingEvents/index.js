import React, { useState } from "react"; 
import "./style.css";
import { Container, Media, Dropdown, DropdownMenu, DropdownToggle, DropdownItem } from 'reactstrap';
import EventsToAttend from "../EventsToAttend";
import MyEvents from "../../pages/MyEvents";
// import EventsToAttend from "../EventsToAttend"


const MyUpcomingEvents = (props) => {

  const [dropdownOpen, setDropdownOpen] = useState(false);
  
  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Container>
    <div>
      {props.events.map(event => (
        <div>
        <EventsToAttend 
          id={event.id}
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
  </Container>
  );
};

export default MyUpcomingEvents;