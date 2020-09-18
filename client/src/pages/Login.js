import React, { useState, useEffect } from 'react';
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button,
} from 'reactstrap';
import LoginForm from "../components/LoginForm";
import ReactAutoScroll from "../components/ReactAutoScroll";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";



function LoginPage() {

  const [users, setUsers] = useState([])
  const [formObject, setFormObject] = useState({})
  const [scrollObject, setScrollObject] = useState({})

  //  // Load all users and store them with setUsers
  // useEffect(() => {
  //   loadUsers()
  // }, [])

  //  // Loads all users and sets them to users
  //  function loadUsers() {
  //   API.getBooks()
  //     .then(res => 
  //       setUsers(res.data)
  //     )
  //     .catch(err => console.log(err));
  // };

  // Deletes a user from the database with a given id, then reloads users from the db
  // function deleteUser(id) {
  //   API.deleteUser(id)
  //     .then(res => loadUsers())
  //     .catch(err => console.log(err));
  // }

  // Handles updating component state when the user types into the input field
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

  function imageScroll() {
    const images = [
      "https://sonoma.edu/sites/www/files/field/image/free_bowling.jpg",
      "https://mcdowallvets.com.au/wp-content/uploads/2018/08/dogpark-4.jpg"
    ]
  }

    return (
      
      <div className="main">

        <div>
          <Jumbotron/>
        </div>
        
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


          
    

       
        <ReactAutoScroll
          targetPosition={900}
          easeType={'linear'}
          speed={5}
          updateInterval={40}
          onScrollingDone={() => console.log('scrolling finished')}
          // scrollTargetRef={(scrollObject.refs.scrollExample)}
          isEnabled
        >
        <div className="image-scroll"
            ref="scrollExample"
            style={{ overflow: 'scroll', backgroundColor: 'red', width: '300px', height: '300px' }}
            >
            <div style={{ height: '2000px' }}>
              content
            </div>
        </div>
       </ReactAutoScroll>
       </div>
      

    );
  }


       


export default LoginPage;






























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