import React from "react"; 
import {
    Button,
    Card,
    CardBody,
    CardImg,
    CardTitle,
    CardText,
  } from "reactstrap";
  
  const style = { width: "18rem" };
  
  function EventCard(props) {
    return (
      <>
        <Card style={style}>
          <CardImg
            alt="..."
            src={props.image}
            top
          ></CardImg>
          <CardBody>
            <CardTitle>{props.name}</CardTitle>
            <CardText>
              {props.description}
            </CardText>
            <CardText>
              {props.location}
            </CardText>
            <CardText>
              {props.date}
            </CardText>
            <CardText>
              {props.time}
            </CardText>
            <Button
              color="primary"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              Sign Up!
            </Button>
          </CardBody>
        </Card>
      </>
    );
  }
  
  export default EventCard;