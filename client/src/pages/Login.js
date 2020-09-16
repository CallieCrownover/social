import React, { Component } from 'react';
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button,
} from 'reactstrap';
import LoginForm from "../components/LoginForm";



class App extends Component {
  render() {
    return (
       
        <div className="form-group" class="login-form" 
        class="animate__animated animate__zoomInUp animate__delay-1s">
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
          <p class="or">OR</p>
          <Col>
            <FormGroup className="signup-input">
              <Label>Email</Label>
              <Input className="login-input"
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
                type="password"
                name="password"
                id="examplePassword"
                placeholder="********"
              />
            </FormGroup>
          </Col>
          <Button className="signup-btn">Sign Up</Button>
          <h2>Already have an account?</h2>
          <p>Log in here</p>
          <Col>
            <FormGroup>
              <Label>Email</Label>
              <Input className="login-input"
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
                type="password"
                name="password"
                id="examplePassword"
                placeholder="********"
              />
            </FormGroup>
          </Col>
          <Button className="login-btn">Log In</Button>
        </Form>
      </Container>
      </div>
    );
  }
}

export default App;






























// import React, { useState, useEffect } from "react";
// import Jumbotron from "../components/Jumbotron";
// import { Input, FormBtn } from "../components/LoginForm";
// import { Col, Row, Container } from "../components/Grid";

// function Login() {
//     // Setting our component's initial state
//     const [users, setUsers] = useState([])
//     const [formObject, setFormObject] = useState({})
  
    

//     return (
//         <Container fluid>
//           <Row>
//             <Col size="md-6">
//               <Jumbotron>
//                 <h1>What Books Should I Read?</h1>
//               </Jumbotron>
//               <form>
//                 <Input
                  
//                   name="title"
//                   placeholder="Title (required)"
//                 />
//                 <Input
                  
//                   name="author"
//                   placeholder="Author (required)"
//                 />
//                 <FormBtn
                  
//                 >
//                   Submit Book
//                 </FormBtn>
//               </form>
//               </Col>
//               </Row>
//       </Container>
//      );
//     }






// export default Login;