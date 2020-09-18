
import "./style.css";
import React, { useState, useEffect } from 'react';
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button,
} from 'reactstrap';
import API from "../../utils/API";
import Jumbotron from "../Jumbotron";

function LoginForm(props) {

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
  if (formObject.username && formObject.email && formObject.password) {
    API.saveUser({
      username: formObject.username,
      email: formObject.email,
      password: formObject.password
    })
      // .then(res => loadUsers())
      .then(console.log(users))
      .catch(err => console.log(err));
  }
};



  return (
    
    <div className="main">
      
      <div className="form-group"  
      className="animate__animated animate__zoomInUp animate__delay-1s">
    <Container className="App">
      <Form className="form">
      <h2>Sign Up</h2>
      <Col>
          <FormGroup>
            <Label className="future-sign-up">Sign up with Facebook (coming soon)</Label>
            </FormGroup>
            <FormGroup>
            <Label className="future-sign-up">Sign up with Google (coming soon)</Label>
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

        <Button className="signup-btn"
        disabled={!(formObject.username && formObject.email && formObject.password)}
        onClick={handleFormSubmit}
        >
          Sign Up</Button>

        <h2>Already have an account?</h2>
        <p>Log in here</p>
        <Col>
          <FormGroup>
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
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input className="login-input"
              onChange={handleInputChange}
              type="password"
              name="password"
              id="examplePassword"
              placeholder="********"
            />
          </FormGroup>
        </Col>
        <Button className="login-btn"
        disabled={!(formObject.username && formObject.email && formObject.password)}
        onClick={handleFormSubmit}
        >
          Log In</Button>
      </Form>
     </Container>
     </div>
     </div>



);
}

export default LoginForm;
































// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
// function LoginForm(props) {
//   return (
//     <div className="form-div">
//     <div className="form-group" class="animate__animated animate__zoomInUp animate__delay-12s">
//       <span>
//       <input className="form-control"/>
//       </span>
//     </div>
//     </div>
//   );
// }

// export default LoginForm;





























  