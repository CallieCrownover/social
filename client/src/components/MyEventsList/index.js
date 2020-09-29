import React from "react"; 
import "./style.css";
import { Container } from 'reactstrap';
// import MyHostedEvents from "../MyHostedEvents"

const MyEvents = (props) => {

  // this is where you are going to map over the media component where we are displaying a user's events they are attending
  return (
      <Container>
        <div>
        <h1>My Hosted Events</h1>  
        </div>
        <div>
          {/* <MyHostedEvents /> */}
        </div>
      </Container>
  );
}

export default MyEvents;