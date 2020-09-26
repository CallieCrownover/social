import "./style.css";
import React from 'react';
import {
    Button, 
  } from 'reactstrap';





function MyEventsBtn (props) {


return(
    
      
     <Button className="flip-btn-2" color="info"
      onClick={props.handleClick()}
>{props.buttonName}
</Button>
    
  )
}





export default MyEventsBtn;