import React, { useState, useEffect } from 'react';
import LoginForm from "../components/LoginForm";
import ReactAutoScroll from "../components/ReactAutoScroll";
import SocialJumbotron from "../components/Jumbotron";





function LoginPage() {

  return(
    <div>
  <div className="jumbo">
  <SocialJumbotron />
  </div>
    <div className="main d-sm-inline-flex">
      <div className="login-div"> 
    <LoginForm />
    </div>
    <div className="scrolling-div">
    <ReactAutoScroll></ReactAutoScroll>
    </div>
  
   
  
    </div>

    </div>
  
  
  );
     
  }


export default LoginPage;