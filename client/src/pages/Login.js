import React, { useState, useEffect } from 'react';
import LoginForm from "../components/LoginForm";
import ReactAutoScroll from "../components/ReactAutoScroll";
import SocialJumbotron from "../components/Jumbotron";




function LoginPage() {

  return(
  <div>
  <SocialJumbotron />
   <LoginForm />
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