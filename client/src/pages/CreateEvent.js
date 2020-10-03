import React from "react"; 
import CreateEventForm from "../components/CreateEventForm";
import Jumbotron from "../components/Jumbotron"; 
import NavMenu from "../components/NavBar";
import CreateEventImage from "../components/CreateEventImage"

function CreateEvent() {
  return(
    <div>
      <Jumbotron className="jumbo" />
    <div className="d-flex flex-row justify-content-center pt-5">
      <div className="p-6">
        <CreateEventImage />
      </div>
      <div className="p-2">
      <CreateEventForm />
      </div>
    </div>
    </div>
  )
}

  export default CreateEvent;
  