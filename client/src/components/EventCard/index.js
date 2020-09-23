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
  
  const style = { width: "25rem" };
  
  function EventCard(props) {
    return (
      <div className="page-wrapper">
      <div className="card-element card-deck">
        <Card style={style} className="card event-card">
          <div className="event-image">
          <CardImg
            alt="..."
            src={props.image}
            className="card-img"
          ></CardImg>
          </div>
          <CardBody>
            <CardTitle className="event-title d-inline-flex">{props.name}</CardTitle>
            <CardText>
              <p className="event-description">
              {props.description}
              </p>
            </CardText>
            <CardText >
              <p className="event-location">
              {props.location}
              </p>
            </CardText>
            <CardText>
              <p className="event-date">
              {props.date}
              </p>
            </CardText>
            <CardText>
              <p className="event-time">
              {props.time}
              </p>
            </CardText>
            <div className="sign-up-btn">
            <Button
              href="#"
              onClick={(e) => e.preventDefault()}
            >
              Sign Up!
            </Button>
            </div>
          </CardBody>
        </Card>
      </div>
      </div>
    );
  }
  
  export default EventCard;

  