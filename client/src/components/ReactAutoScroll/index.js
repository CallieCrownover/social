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




{/* <ReactAutoScroll
        targetPosition={900}
        easeType={'linear'}
        speed={5}
        updateInterval={40}
        onScrollingDone={() => console.log('scrolling finished')}
        // scrollTargetRef={(scrollObject.refs.scrollExample)}
        isEnabled
      >
      <div className="image-scroll"
          ref="scrollExample"
          style={{ overflow: 'scroll', backgroundColor: 'red', width: '300px', height: '300px' }}
          >
          <div style={{ height: '2000px' }}>
            content
          </div>
      </div>
     </ReactAutoScroll>
     </div> */}