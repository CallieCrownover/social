import "./style.css";
import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const SocialJumbotron = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>

        <img className="logo" src="../../assets/image/socialLogo_vectorBlack.svg" alt="logo"/>

        
        
        </Container>
      </Jumbotron>
    </div>
  );
};

export default SocialJumbotron;