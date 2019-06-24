import React from 'react';
import logo from './logo.svg';
import './App.css';
import Webcam from './Webcam';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Webcam/>
    </div>
  );
}

export default App;
