import React from "react"; 
import {
    Button, Card, CardBody, CardImg, CardTitle,CardText, Dropdown, Media, DropdownToggle, DropdownMenu, DropdownItem
  } from "reactstrap";
import "./style.css";
import api from "../../utils/API";
import OutdoorImg from "../../assets/images/outdoor-events-stock-photo.jpg"
import ArtImg from "../../assets/images/art-events-stock-photo.jpg"; 
import BookImg from "../../assets/images/book-club-stock-photo.jpg"; 
import FamilyImg from "../../assets/images/family-stock-photo.jpg"; 
import FoodDrinkImg from "../../assets/images/food-drink-stock-photo.jpg"; 
import HealthWellnessImg from "../../assets/images/health-wellness-stock-photo.jpg"; 
import PetsImg from "../../assets/images/pets-stock-photo.jpg"; 
import PhotoImg from "../../assets/images/photography-stock-photo.jpg"; 
import SportsFitnessImg from "../../assets/images/sports-fitness-stock-photo.jpg"; 
import TechImg from "../../assets/images/tech-stock-photo.jpg"; 
import OtherImg from "../../assets/images/socialLogo_vectorBlack.svg"; 
import AxeImg from "../../assets/images/axe-throwing-stock-image.jpg"
  
  const style = { width: "25rem" };
  
  function EventCard(props) {
console.log("props")
console.log(props);
   var image = {
     OutdoorImg: OutdoorImg,
     ArtImg: ArtImg, 
     BookImg: BookImg,
     FamilyImg: FamilyImg,
     FoodDrinkImg: FoodDrinkImg,
     HealthWellnessImg: HealthWellnessImg, 
     PetsImg: PetsImg, 
     PhotoImg: PhotoImg, 
     SportsFitnessImg: SportsFitnessImg, 
     TechImg: TechImg,
     OtherImg: OtherImg,
     AxeImg: AxeImg
   }

    if (props.category === "Outdoors & Adventure") {
      image = image.OutdoorImg
    }

    if (props.category === "Photography") {
      image = image.PhotoImg
    }

    if (props.category === "Health & Wellness") {
      image = image.HealthWellnessImg
    }

    if (props.category === "Tech") {
      image = image.TechImg
    }

    if (props.category === "Sports & Fitness") {
      image = image.SportsFitnessImg
    }

    if (props.category === "Food & Drink") {
      image = image.FoodDrinkImg
    }
    
    if (props.category === "Book Clubs") {
      image = image.BookImg
    }

    if (props.category === "Pets") {
      image = image.PetsImg
    }

    if (props.category === "Family") {
      image = image.FamilyImg
    }

    if (props.category === "Arts") {
      image = image.ArtImg
    }

    if (props.category === "Axe Throwing") {
      image = image.AxeImg
    }
    
    if (props.category === "Other") {
      image = image.Other
    }

    console.log(props.category)

    return (
      <div className="card-element card-deck h-100 py-2">
        <Card style={style} className="card event-card">
          <div className="event-image">
          <CardImg
            alt="..."
            src={image}
            className="card-img"
          ></CardImg>
          </div>
          <CardBody>
            <CardTitle className="event-title d-inline-flex">{props.name}</CardTitle>
            <div className= "event-details">
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
            </div>
            <div className="sign-up-btn">
            <Button
              href="#"
              onClick={()=>api.eventSignUp(props.id)}
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

  