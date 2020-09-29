import "./style.css";
import React from 'react';
import {
    Button, 
  } from 'reactstrap';





function MyEventsBtn (props) {


return(
    
      <div className="flip-btn-2">
     <Button className="events-toggle" 
      onClick={props.handleClick()}
>{props.buttonName}
</Button>
</div>
    
  )
}





export default MyEventsBtn;