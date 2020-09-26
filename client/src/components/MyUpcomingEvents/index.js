import React, { useState } from "react"; 
import "./style.css";
import { Media, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Container } from 'reactstrap';

const MyUpcomingEvents = () => {

  const [dropdownOpen, setDropdownOpen] = useState(false);
  
  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (

    <Container>
    <div >
      <h1> My Upcoming Events</h1>
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
    <Dropdown isOpen={dropdownOpen} toggle={toggle} className="attending-dropdown">
      <DropdownToggle caret id="navBtn">
        Attendees
        </DropdownToggle>
        <DropdownMenu className="attendees rounded">
      <DropdownItem href="">1</DropdownItem>
        <DropdownItem href="">2</DropdownItem>
        <DropdownItem href="">3</DropdownItem>
        <DropdownItem href="">4</DropdownItem>
        <DropdownItem href="">5</DropdownItem>
       </DropdownMenu>
    </Dropdown>
    </div>
    </Container>
  );
};

export default MyUpcomingEvents;