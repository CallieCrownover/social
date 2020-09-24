import "./style.css";
import React, { useState, useEffect } from 'react';
import {
    Button, 
  } from 'reactstrap';
import { useHistory } from 'react-router-dom'
import API from "../../utils/API";





function MyEventsBtn (props) {


return(
    
      
     <Button className="flip-btn-2" color="info"
      onClick={props.handleClick()}
>{props.buttonName}
</Button>
    
  )
}





export default MyEventsBtn;