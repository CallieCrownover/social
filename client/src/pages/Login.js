import React, { useState } from 'react';
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";
import ReactAutoScroll from "../components/ReactAutoScroll";
import SocialJumbotron from "../components/Jumbotron";
import LoginFlipBtn from '../components/LoginFlipBtn';





function LoginPage() {

  const [signUpComp, setSignUpComp]=useState(true)
  const [buttonName , setButtonName] = useState("Already have an account? Log in here")

  function handleClick(){
    if(signUpComp ===true){
      setSignUpComp(false)

    }else if (signUpComp ===false){
      setSignUpComp(true)
      setButtonName("Already have an account? Log in here")
    }
    if(signUpComp ===false){
      setSignUpComp(true)

    }else if (signUpComp ===true){
      setSignUpComp(false)
      setButtonName("Create new account")
        }

  }

  return(
    
    <div>
  <div className="jumbo">
  <SocialJumbotron />
  </div>
    <div className="main d-sm-inline-flex">
      <div className="login-div"> 
    
    {signUpComp?<SignUpForm />:<LoginForm/>}
    <LoginFlipBtn className="flipper" handleClick={()=>handleClick}   buttonName={buttonName}/>
    </div>
    <div className="scrolling-div">
    <ReactAutoScroll></ReactAutoScroll>

    <p className="intro">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
    </div>
  
     
    
  
    </div>

    </div>
  
    
  );
    
   
     
  }


export default LoginPage;