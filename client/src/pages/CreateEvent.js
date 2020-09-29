import React from "react"; 
import CreateEventForm from "../components/CreateEventForm";
import Jumbotron from "../components/Jumbotron"; 
import NavMenu from "../components/NavBar";

function CreateEvent() {
  return(
    <div>
      <Jumbotron className="jumbo" />
      <NavMenu />
    <div className="d-flex">
      <CreateEventForm />
    </div>
    </div>
  )
}

  export default CreateEvent;
  