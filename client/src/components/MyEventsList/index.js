import React from "react"; 
import "./style.css";
import { Container } from 'reactstrap';
import MyHostedEvents from "../MyHostedEvents"

const MyEventsList = (props) => {
console.log(props)
  // this is where you are going to map over the media component where we are displaying a user's events they are attending
  return (
      <Container>
        <div>
        {props.myCreatedEvents.map(event => (
        <div>
        {console.log(event)}
        <MyHostedEvents
          id={event.id}
          name={event.eventName}
          category={event.category}
          location={event.location}
          description={event.description}
          date={event.date}
          time={event.time}
        />
        </div>
        ))}
        </div>
      </Container>
  );
}

export default MyEventsList;