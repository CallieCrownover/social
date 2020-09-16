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
  
  function EventCard() {
    return (
      <>
        <Card style={style}>
          <CardImg
            alt="..."
            src={"https://media.istockphoto.com/photos/bowling-picture-id480732472?k=6&m=480732472&s=612x612&w=0&h=5NOYSs5huZiVrj0FanxaB2feafYLKj2qzVyzEXqeydI="}
            top
          ></CardImg>
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CardText>
            <Button
              color="primary"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              Go somewhere
            </Button>
          </CardBody>
        </Card>
      </>
    );
  }
  
  export default EventCard;