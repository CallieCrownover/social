import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function ReactAutoScroll(props) {
  return (
      <div className="scroll">
    <div className="auto-scroll">
        
      <span>
      <img src="https://sonoma.edu/sites/www/files/field/image/free_bowling.jpg"/>
      </span>
    </div>
    </div>
  );
}

export default ReactAutoScroll;