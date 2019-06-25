import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home'
import WebcamMain from './WebcamMain';
import ReactWebcam from './ReactWebcam'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Router>
          <Route exact path="/" component={Home}/>
          <Route exact path='/webcam' component={WebcamMain}/>
          <Route exact path='/react-webcam' component={ReactWebcam}/>
        </Router>
    </div>
  );
}

export default App;
