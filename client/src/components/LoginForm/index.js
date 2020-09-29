import "./style.css";
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button, 
} from 'reactstrap';
import API from "../../utils/API";


function LoginForm(props) {
  const history = useHistory()
  // const [users, setUsers] = useState([])
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



  return (
    <div className="animate__animated animate__fadeInLeftBig animate__ rounded main2">
      
    <Container className="App">
      <Form className="login-form">
      <h2 className="login-h2">Log In</h2>
        <Col>
          <FormGroup className="login-input rounded">
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
          <FormGroup className="login-input rounded">
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
        <Button className="login-btn rounded" color="danger"
        disabled={!(formObject.email && formObject.password)}
        onClick={handleFormSubmit}
        >
          Log In</Button>
      </Form>
     </Container>
     
     </div>



);
}

export default LoginForm;






























































  