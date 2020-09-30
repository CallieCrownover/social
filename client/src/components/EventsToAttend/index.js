import React, { useState } from "react"; 
import "./style.css";
import { Media, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Container } from 'reactstrap';
import OutdoorImg from "../../assets/images/outdoor-events-stock-photo.jpg"; 
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
import AxeImg from "../../assets/images/axe-throwing-stock-image.jpg"; 

const EventsToAttend = (props) => {
    
  const [dropdownOpen, setDropdownOpen] = useState(false);
  
  const toggle = () => setDropdownOpen(prevState => !prevState);

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
  
  
    return (
      <div className="event-div rounded">
      <Container >
        
      <div >
        <h1 className="d-flex justify-content-center">Events to Attend</h1>
        <hr></hr>
      </div>
      <div className="media-main" >
      <div className="media" className="d-flex justify-content-center">
        
      <Media list>
        <Media tag="li">
          <Media left href="#">
            <Media object data-src="holder.js/64x64" alt="Generic placeholder image" />
          </Media>
          <Media body>
            <Media heading>
              Media heading
            </Media>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            <Media>
            </Media>
          </Media>
        </Media>
      </Media>
      
      </div>
      
  
      <Dropdown isOpen={dropdownOpen} toggle={toggle} className="attending-dropdown">
        <DropdownToggle caret id="navBtn">
          Attendees
          </DropdownToggle>
          <DropdownMenu className="dropdown-menu rounded">
        <DropdownItem href="">1</DropdownItem>
          <DropdownItem href="">2</DropdownItem>
          <DropdownItem href="">3</DropdownItem>
          <DropdownItem href="">4</DropdownItem>
          <DropdownItem href="">5</DropdownItem>
         </DropdownMenu>
      </Dropdown>
      </div>
      </Container>
      </div>
    );
  };
  
  export default EventsToAttend;