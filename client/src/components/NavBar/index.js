import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';



const NavMenu = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [navToPage, setNavToPage] = useState(true);

  const toggle = () => setDropdownOpen(prevState => !prevState);
  const navigate = () => setNavToPage(true)

  

  return (
    <div className="nav-menu">
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
        Dropdown
        </DropdownToggle>
      <DropdownMenu>
      <DropdownItem>Create an Event{props.CreateEvent}</DropdownItem>
        <DropdownItem>All Events{props.Events}</DropdownItem>
        <DropdownItem>My Upcoming Events{props.Myevents}</DropdownItem>
        <DropdownItem>My Events{props.MyEvents}</DropdownItem>
        <DropdownItem>Logout{props.Login}</DropdownItem>
       </DropdownMenu>
    </Dropdown>
    </div>
  );
}

export default NavMenu;