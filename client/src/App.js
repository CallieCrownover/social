import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Login from "./pages/Login";
import Events from "./pages/Events"; 
import CreateEvent from "./pages/CreateEvent"
import MyEvents from "./pages/MyEvents";




function App() {
  return (
    <Router>
      <div>
      <Route exact path="/" component={Login} />
      <Route exact path="/events" component={Events} />
      <Route exact path="/create" component={CreateEvent} />
      <Route exact path="/myevents" component={MyEvents} />
      </div>

    </Router>
  );
}

export default App;
