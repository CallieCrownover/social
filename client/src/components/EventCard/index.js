import React from "react"; 
import {
    Button,
    Card,
    CardBody,
    CardImg,
    CardTitle,
    CardText,
  } from "reactstrap";
import "./style.css";
  
  const style = { width: "18rem" };
  
  function EventCard(props) {
    return (
      <div className="card-element">
        <Card style={style} className="card event-card">
          <div className="event-img">
          <CardImg
            alt="..."
            src={props.image}
            top
          ></CardImg>
          </div>
          <CardBody>
            <div className="event-details">
            <CardTitle className="event-title">{props.name}</CardTitle>
            <div className="event-description">
            <CardText>
              {props.description}
            </CardText>
            </div>
            <div className="event-location">
            <CardText>
              {props.location}
            </CardText>
            </div>
            <div className="event-date">
            <CardText>
              {props.date}
            </CardText>
            </div>
            <div className="event-time">
            <CardText>
              {props.time}
            </CardText>
            </div>
            <Button
              className="signup"
              href="#"
              onClick={(e) => e.preventDefault()}
            >
              Sign Up!
            </Button>
            </div>
          </CardBody>
        </Card>
      </div>
    );
  }
  
  export default EventCard;

  