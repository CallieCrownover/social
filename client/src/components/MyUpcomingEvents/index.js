import React, { useState } from "react"; 
import "./style.css";
import { Container, Dropdown, Media, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
// import EventsToAttend from "../EventsToAttend"


const MyUpcomingEvents = (props) => {

  const [dropdownOpen, setDropdownOpen] = useState(false);
  
  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
     <div className="event-div rounded">
    <Container>
      
    <div >
      <h1 className="d-flex justify-content-center"> My Upcoming Events</h1>
      <hr></hr>
    </div>
    <div className="media">
      
    <Media list>
      <Media tag="li">
        <Media left href="#">
          <Media object data-src="holder.js/64x64" alt="Generic placeholder image" />
        </Media>
        <Media body>
          <Media heading>
            Media heading
          </Media>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          <Media>
          </Media>
        </Media>
      </Media>
    </Media>
    
    </div>

    <Dropdown isOpen={dropdownOpen} toggle={toggle} className="attending-dropdown">
      <DropdownToggle caret id="navBtn">
        Attendees
        </DropdownToggle>
        <DropdownMenu className="dropdown-menu rounded">
      <DropdownItem href="">1</DropdownItem>
        <DropdownItem href="">2</DropdownItem>
        <DropdownItem href="">3</DropdownItem>
        <DropdownItem href="">4</DropdownItem>
        <DropdownItem href="">5</DropdownItem>
       </DropdownMenu>
    </Dropdown>
    <div>
      <h1>My Upcoming Events</h1>
    </div>
    <div>
    {/* <EventsToAttend /> */}
    </div>
    </Container>
    </div>
  );
};

export default MyUpcomingEvents;