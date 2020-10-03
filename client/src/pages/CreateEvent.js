import React from "react"; 
import CreateEventForm from "../components/CreateEventForm";
import Jumbotron from "../components/Jumbotron"; 
import NavMenu from "../components/NavBar";
import CreateEventImage from "../components/CreateEventImage"
import CreateEventHeader from "../components/CreateEventHeader"

function CreateEvent() {
  return(
    <div>
      <Jumbotron className="jumbo" />
      <NavMenu />
      <div className="container">
      <div className="row">
      <div className="col-md-12">
      <CreateEventHeader />
      </div>
      </div>
      </div>
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
  