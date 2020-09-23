
import "./style.css";
import React, { useState, useEffect } from 'react';
import {
    Button, 
  } from 'reactstrap';
import { useHistory } from 'react-router-dom'
import API from "../../utils/API";





function LoginFlipBtn (props) {


return(
    <div className="btn-div" >
     <Button className="flip-btn" color="info"
      onClick={props.handleClick()}
>{props.buttonName}</Button>
    </div>
  )
}





export default LoginFlipBtn;