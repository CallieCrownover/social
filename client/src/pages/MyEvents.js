import React, { useState, useEffect } from 'react';
import Jumbotron from "../components/Jumbotron"; 
import MyEventsList from "../components/MyEventsList";
import MyUpcomingEvents from "../components/MyUpcomingEvents";
import MyEventsBtn from "../components/MyEventsBtn";
import NavMenu from "../components/NavBar";
import API from "../utils/API";


function MyEvents() {

  const [myEvents, setMyEvents]=useState(true)
  const [buttonName , setButtonName] = useState("Go to My Hosted Events")
  const [myCreatedEvents, setMyCreatedEvents]=useState([])
  const [events, setEvents] = useState([]);
  useEffect(() => {
    loadMyEvents()
  }, []);

// loading events using API call to the database
// function loadMyEvents () {
//   const res = API.getMyEvents().then(results=>{
//     console.log(results.data);
//     console.log(res);
//     setEvents(results.data)
//   });
// }

// function to test prop drilling without doing API call to the database 
const testData =[{
  id :"1",
  eventName: "test",
  category: "testCategory",
  description: "testDescription",
  date: "October 3, 2020",
  time: "5:00pm", 
  location: "testLocation"
}] 
function loadMyEvents () {
  setEvents(testData)
  setMyCreatedEvents(testData)
}

  function handleClick(){
    if(myEvents === true){
      setMyEvents(false)

    }else if (myEvents === false){
      setMyEvents(true)
      setButtonName("Go to My Hosted Events")
    }
    if(myEvents ===false){
      setMyEvents(true)

    }else if (myEvents ===true){
      setMyEvents(false)
      setButtonName("Go to Events to Attend")
        }

  }

  
// function to load events the user has signed up for. will uncomment and test once the user and events table are
  // useEffect(() => {
  //   loadMyEvents()
  // }, []);

  // function loadMyEvents() {
  //   const res = API.getMyEvents().then(results=>{
  //     console.log(results.data)
  //     setMyEvents(results.data)
  //   })
  // }

   return(
    <div>
     <Jumbotron className="jumbo" />
     <NavMenu />
     <div className="button-div rounded">
       <MyEventsBtn className="flip-btn-2" handleClick={()=>handleClick}   buttonName={buttonName}/>
       </div>
     <div className="main d-sm-inline-flex">
       
       <div className="event-div"> 
       {/* passing my events and createdEvents down as props */}
       {myEvents?< MyUpcomingEvents events={events} />: < MyEventsList myCreatedEvents={myCreatedEvents} />

       /* {events.map(event => ( */
        //   <div className="col-md-4">
        //   <MyEventsList
        //     id={event._id}
        //     key={event._id}
        //     name={event.eventName}
        //     category={event.category}
        //     location={event.location}
        //     description={event.description}
        //     date={event.date}
        //     time={event.time}
        //   />
        //  </div>
    // ))
       }
       </div>
       
     </div>

     </div>       
   )
}

export default MyEvents;