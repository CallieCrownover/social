import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';



const NavMenu = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  
  const toggle = () => setDropdownOpen(prevState => !prevState);
  

  return (
    <div className="nav-menu d-flex justify-content-top">
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret id="navBtn">
        Menu
        </DropdownToggle>
      <DropdownMenu>
      <DropdownItem href="/create">Create an Event</DropdownItem>
        <DropdownItem href="/events">All Events</DropdownItem>
        <DropdownItem href="/myevents">My Events/Upcoming Events</DropdownItem>
        <DropdownItem href="/">Logout</DropdownItem>
       </DropdownMenu>
    </Dropdown>
    </div>
  );
}

export default NavMenu;