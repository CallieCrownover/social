import React, { useState } from 'react';
import Jumbotron from "../components/Jumbotron"; 
import MyEventsList from "../components/MyEventsList";
import MyUpcomingEvents from "../components/MyUpcomingEvents";
import MyEventsBtn from "../components/MyEventsBtn";
import NavMenu from "../components/NavBar";
// import API from "../utils/API";



function MyEvents() {

    const [myEvents, setMyEvents]=useState(true)
  const [buttonName , setButtonName] = useState("Go to events I'm hosting")

  function handleClick(){
    if(myEvents ===true){
      setMyEvents(false)

    }else if (myEvents ===false){
      setMyEvents(true)
      setButtonName("Go to events I'm hosting")
    }
    if(myEvents ===false){
      setMyEvents(true)

    }else if (myEvents ===true){
      setMyEvents(false)
      setButtonName("Go to my upcoming events")
        }

  }

   return(
    <div>
     <Jumbotron className="jumbo" />
     <NavMenu />
     <div className="main d-sm-inline-flex">
       
       <div className="button-div rounded">
       <MyEventsBtn className="flip-btn-2" handleClick={()=>handleClick}   buttonName={buttonName}/>
       </div>
       <div className="event-div"> 
       {myEvents?<MyUpcomingEvents />:<MyEventsList />}
       </div>
       
     </div>

     </div>
       
   )


}

export default MyEvents;