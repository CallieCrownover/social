import "./style.css";
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button, 
} from 'reactstrap';
import API from "../../utils/API";




function SignUpForm(props) {
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




    return(
        <div className="login-div">
        <div className="animate__animated animate__zoomIn animate__delay-1s rounded main">
      
      
     
        <Container className="App">
          <Form className="form">
          <h2 className="signup-h2">Sign Up</h2>
          {/* <Col className="column">
              <FormGroup>
                <div className="google">
                  <img className="sign-in-image rounded" src="https://cdn.productboard.com/production/attachments/2752f0c9d6a0ee54276eb87e11cd6adedc1fa7ef9915af59d1964f5818ab661b/portal_cover/Screen_Shot_2019-04-24_at_9.27.40_AM.png" alt="Google logo"></img>
                  </div>
                
                </FormGroup>
                <FormGroup>
                  <div className="facebook">
                <img className="sign-in-image rounded" src="https://img.pngio.com/el-caracol-mexican-restaurant-best-authentic-mexican-food-in-facebook-login-icon-png-713_151.png" alt="Facebook Logo"></img>
                </div>
                </FormGroup>
            </Col> */}

            <div class="align-self-center">
            {/* <p className="or-p">OR</p> */}
            <Col className="column">
              <FormGroup className="signup-input rounded">
                <Label className="label">Email</Label>
                <Input className="login-input"
                  onChange={handleInputChange}
                  type="email"
                  name="email"
                  id="exampleEmail"
                  placeholder="myemail@email.com"
                />
              </FormGroup>
            </Col>
            <Col className="column">
              <FormGroup className="signup-input rounded">
                <Label className="label" for="examplePassword">Create a Password</Label>
                <Input className="login-input"
                  onChange={handleInputChange}
                  type="password"
                  name="password"
                  id="examplePassword"
                  placeholder="********"
                />
              </FormGroup>
            </Col>
            
              
           </div>
          
        </Form>


        <Button color="light alert" className="signup-btn rounded practice"
            disabled={!(formObject.email && formObject.password)}
            onClick={handleFormSubmit}
            >
              Submit</Button>
     </Container>
     </div>
     </div>
    );
}




export default SignUpForm;