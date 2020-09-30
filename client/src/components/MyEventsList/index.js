import React from "react"; 
import "./style.css";
import { Container } from 'reactstrap';
import MyHostedEvents from "../MyHostedEvents"

const MyEvents = (props) => {

  // this is where you are going to map over the media component where we are displaying a user's events they are attending
  return (
      <Container>
        <div>
          <MyHostedEvents />
        </div>
      </Container>
  );
}

export default MyEvents;