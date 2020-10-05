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

    <p className="intro">" Discover your Social group! From the adventures of axe throwing to creating your yoga zen... Social is the place for hosting and registering for local events to create exciting new life experiences. As the site grows, it will also help you grow your group and attract more people who share your interests."</p>
    </div>
  
     
    
  
    </div>

    </div>
  
    
  );
    
   
     
  }


export default LoginPage;