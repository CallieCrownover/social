import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import "./style.css"


const NavMenu = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  
  const toggle = () => setDropdownOpen(prevState => !prevState);
  

  return (
    <div className="nav-menu">
      <div className="nav-btn">
    <Dropdown isOpen={dropdownOpen} toggle={toggle} className="navbar-dropdown">
      <DropdownToggle caret className="navBtn">
        Menu
        </DropdownToggle>
      <DropdownMenu className="dropdown-menu rounded">
      <DropdownItem href="/create">Create an Event</DropdownItem>
        <DropdownItem href="/events">All Events</DropdownItem>
        <DropdownItem href="/myevents">Events I'm Hosting</DropdownItem>
        <DropdownItem href="/myevents">My Upcoming Events</DropdownItem>
        <DropdownItem href="/">Logout</DropdownItem>
       </DropdownMenu>
    </Dropdown>
    </div>
    </div>
  );
}

export default NavMenu;