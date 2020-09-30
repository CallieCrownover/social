import React, { useState } from "react"; 
import "./style.css";
import { Container, Media, Dropdown, DropdownMenu, DropdownToggle, DropdownItem } from 'reactstrap';
import EventsToAttend from "../EventsToAttend";
// import EventsToAttend from "../EventsToAttend"


const MyUpcomingEvents = (props) => {

  const [dropdownOpen, setDropdownOpen] = useState(false);
  
  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Container>
    <div>
      <EventsToAttend />
    </div>
  </Container>
  );
};

export default MyUpcomingEvents;