import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home'
import Webcam from './Webcam';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Router>
          <Route exact path="/" component={Home}/>
          <Route exact path='/webcam' component={Webcam}/>
        </Router>
    </div>
  );
}

export default App;
