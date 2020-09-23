import "./style.css";
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button, 
} from 'reactstrap';
import API from "../../utils/API";




function SignUpForm(props) {
  const history = useHistory()
  const [users, setUsers] = useState([])
  const [formObject, setFormObject] = useState({})

 function handleInputChange(event) {
  const { name, value } = event.target;
  setFormObject({...formObject, [name]: value})
};

// When the form is submitted, use the API.saveUser method to save the user data
// Then reload users from the database
function handleFormSubmit(event) {
  event.preventDefault();

  if (formObject.email && formObject.password) {
    API.saveUser({
      email: formObject.email,
      password: formObject.password
    })
      .then(() => {
        console.log(history.push)
        history.push('/Events')
      })
      .catch(err => console.log(err));
  }
};




    return(
        <div className="main" className="animate__animated animate__zoomInUp animate__delay-1s">
      
      
     
        <Container className="App">
          <Form className="form">
          <h2>Sign Up</h2>
          <Col>
              <FormGroup>
                
                  <img className="sign-in-image" src="https://cdn.productboard.com/production/attachments/2752f0c9d6a0ee54276eb87e11cd6adedc1fa7ef9915af59d1964f5818ab661b/portal_cover/Screen_Shot_2019-04-24_at_9.27.40_AM.png"></img>
                
                </FormGroup>
                <FormGroup>
                <img className="sign-in-image" src="https://img.pngio.com/el-caracol-mexican-restaurant-best-authentic-mexican-food-in-facebook-login-icon-png-713_151.png"></img>
                </FormGroup>
            </Col>
            <p className="or">OR</p>
            <Col>
              <FormGroup className="signup-input">
                <Label>Email</Label>
                <Input className="login-input"
                  onChange={handleInputChange}
                  type="email"
                  name="email"
                  id="exampleEmail"
                  placeholder="myemail@email.com"
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup className="signup-input">
                <Label for="examplePassword">Create a Password</Label>
                <Input className="login-input"
                  onChange={handleInputChange}
                  type="password"
                  name="password"
                  id="examplePassword"
                  placeholder="********"
                />
              </FormGroup>
            </Col>
    
            <Button className="signup-btn" color="danger"
            disabled={!(formObject.email && formObject.password)}
            onClick={handleFormSubmit}
            >
              Sign Up</Button>
    
            <h2>Already have an account?</h2>
          
        
        </Form>
     </Container>
     </div>

    );
}




export default SignUpForm;