import React from 'react';
import './App.css';
import Login from "./pages/Login";
import Events from "./pages/Events"; 
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
      <Route exact path="/" component={Login} />
      <Route exact path="/events" component={Events} />
      </div>
    </Router>
  );
}

export default App;
