import React, {useState} from 'react';
import { Button, Form, FormGroup, Label, Input, Col} from 'reactstrap';
import "./style.css";


const CreateEventForm = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);


  return (
    <div className="create-event-form flex-row">
    <Form>
      <div className="form-elements">
      <div className="flex-column">
      <FormGroup className="form-header">
        <Label  for="event-name">Event Name</Label>
        <Input name="event-name" id="name"/>
      </FormGroup >
      <FormGroup className="form-header">
        <Label >Select Event Category</Label>
        <Col md={20}>
          <Input type="select" name="event-category" id="event-category">
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
        <Input name="location" id="location"/>
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
}

export default CreateEventForm;