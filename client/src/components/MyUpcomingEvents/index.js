import React, { useState } from "react"; 
import "./style.css";
import { Container } from 'reactstrap';
// import EventsToAttend from "../EventsToAttend"


const MyUpcomingEvents = (props) => {

  const [dropdownOpen, setDropdownOpen] = useState(false);
  
  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (

    <Container>
    <div>
      <h1>My Upcoming Events</h1>
    </div>
    <div>
    {/* <EventsToAttend /> */}
    </div>
    </Container>
  );
};

export default MyUpcomingEvents;