import React,{useEffect} from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import "./style.css";
import API from "../../utils/API"

const CreateEventForm = () => {

useEffect(()=>{
  let data = {
    eventName:"Event 1",
    location:"NC",
    date:"2010-09-02",
    time:"2:00pm",
    category:"fun stuff"
  }
  console.log("in the use effect")
API.createEventForm(data).then(response=>{console.log("RESPONSE") ;console.log(response)})

},[])


  return (
    <div className="create-event-form flex-row">
      <Form>
        <div className="form-elements">
          <div className="flex-column">
            <FormGroup className="form-header">
              <Label for="event-name">Event Name</Label>
              <Input name="event-name" id="name" />
            </FormGroup>
          </div>
          <div className="flex-column">
            <FormGroup className="form-header">
              <Label for="event-location">Event Location</Label>
              <Input name="location" id="location" />
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
              />
            </FormGroup>
          </div>
          <div className="flex-column">
            <FormGroup className="form-header">
              <Label for="event-description">Briefly describe the event</Label>
              <Input type="textarea" name="description" id="description" />
            </FormGroup>
            <div className="flex-column create-event-btn">
              <Button>Submit</Button>
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default CreateEventForm;
