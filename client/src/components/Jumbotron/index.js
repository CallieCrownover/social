import "./style.css";
import React from 'react';
import { Jumbotron } from 'reactstrap';
import NavMenu from "../NavBar"

const SocialJumbotron = (props) => {
  return (
    
      <Jumbotron fluid>
        <NavMenu />
        <div className="container-full-bg d-flex align-items-center justify-content-center">
        <img className="logo" src="../../assets/image/socialLogo_vectorWhite.svg" alt="logo"/>

        
        </div>
      </Jumbotron>
    
  );
};

export default SocialJumbotron;