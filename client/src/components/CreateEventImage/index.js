import React from "react"; 
import "./style.css"
import image from "../../assets/images/gathering-stock-photo.jpg"
function CreateEventHeader() {
return(
    <div className="container">
    <img className = "image" src={image} alt="Social-Event"></img>
    <div className="content header-text d-flex justify-content-center">
    <h1>Ready to Host the Next Great Event?</h1>
    </div>
    </div>

)
 
}

export default CreateEventHeader;