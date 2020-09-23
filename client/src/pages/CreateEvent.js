import React, { useState, useEffect } from "react"; 
import CreateEventForm from "../components/CreateEventForm";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron"; 

function CreateEvent() {
  return(
    <div>
      <Jumbotron className="jumbo" />
    <div className="d-flex">
      <CreateEventForm />
    </div>
    </div>
  )
}

  export default CreateEvent;
  