import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import "./style.css";

const CreateEventForm = () => {
  return (
    <div className="create-event-form">
    <Form>
      <FormGroup>
        <Label for="event-name">Event Name</Label>
        <Input name="event-name" id="name"/>
      </FormGroup>
      <FormGroup>
        <Label for="event-location">Event Location</Label>
        <Input name="location" id="location"/>
      </FormGroup>
      <FormGroup>
        <Label for="event-date">Event Date</Label>
        <Input name="date" id="date"/>
      </FormGroup>
      <FormGroup>
        <Label for="event-time">Event Time</Label>
        <Input name="time" id="time"/>
      </FormGroup>
      <FormGroup>
        <Label for="event-description">Provide a brief description of your event</Label>
        <Input type="textarea" name="description" id="description" />
      </FormGroup>
      <Button>Submit</Button>
    </Form>
    </div>
  );
}

export default CreateEventForm;