
import React, {useState} from 'react';
import { Button, Form, FormGroup, Label, Input, Col} from 'reactstrap';
import "./style.css";
import API from "../../utils/API"


// const CreateEventForm = () => {

// useEffect(()=>{
//   let data = {
//     eventName:"Event 1",
//     location:"NC",
//     date:"2010-09-02",
//     time:"2:00pm",
//     category:"fun stuff"
//   }
//   console.log("in the use effect")
// API.createEventForm(data).then(response=>{console.log("RESPONSE") ;console.log(response)})

// },[])


function CreateEventForm(props) {
  // const history = useHistory()
  // const [event, setEvent] = useState([])
  const [formObject, setFormObject] = useState({})

 function handleInputChange(event) {
  const { name, value } = event.target;
  console.log(value)
  setFormObject({...formObject, [name]: value})
};

// When the form is submitted, use the API.createEventForm method to save the user's event
function handleFormSubmit(event) {
  event.preventDefault();

  if (formObject.eventName && formObject.location && formObject.description && formObject.category) {
    API.createEventForm({
      eventName: formObject.eventName,
      location: formObject.location,
      description: formObject.description,
      date: formObject.date,
      time: formObject.time,
      category:  formObject.category
    })
      .then(() => {

        console.log(event.data)

    })
      .catch(err => console.log(err));
  }
};



  return (
    <div className="create-event-form flex-row">

      

    <Form>
      <div className="form-elements">
      <div className="flex-column">
      <FormGroup className="form-header">
        <Label  for="event-name">Event Name</Label>
        <Input name="eventName" id="name"onChange={handleInputChange} />
      </FormGroup >
      <FormGroup className="form-header">
        <Label >Select Event Category</Label>
        <Col md={20}>
          <Input type="select" name="category" id="event-category" onChange={handleInputChange}>
            <option>Outdoors &amp; Adventure</option>
            <option>Health &amp; Wellness</option>
            <option>Photography</option>
            <option>Tech</option>
            <option>Sports &amp; Fitness</option>
            <option>Food &amp; Drink</option>
            <option>Book Clubs</option>
            <option>Pets</option>
            <option>Family</option>
            <option>Arts</option>
            <option>Other</option>
          </Input>
        </Col>
      </FormGroup>
      </div>
      <div className="flex-column">
      <FormGroup className="form-header">
        <Label for="event-location">Event Location</Label>
        <Input name="location" id="location" onChange={handleInputChange}/>
      </FormGroup>
      </div>
      <div className="flex-column">
      <FormGroup className="form-header">
        <Label for="exampleDate">Date</Label>
        <Input
          type="date"
          name="date"
          id="exampleDate"
          placeholder="date placeholder"
          onChange={handleInputChange}
        />
      </FormGroup>
      </div>
      <div className="flex-column">
      <FormGroup className="form-header">
        <Label for="exampleTime">Time</Label>
        <Input
          type="time"
          name="time"
          id="exampleTime"
          placeholder="time placeholder"
          onChange={handleInputChange}
        />
      </FormGroup>
      </div>
      <div className="flex-column">
      <FormGroup className="form-header">
        <Label for="description">Briefly describe the event</Label>
        <Input type="textarea" name="description" id="event-description" onChange={handleInputChange}/>
      </FormGroup>
      <div className="flex-column create-event-btn">
      <Button 
      disabled={!(formObject.eventName)}
      onClick={handleFormSubmit} >
        Submit
      </Button>
      </div>
      </div>
      </div>
    </Form>

    </div>
  );
};

export default CreateEventForm;
