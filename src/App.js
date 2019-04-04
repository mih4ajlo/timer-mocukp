import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";



import Timer from './components/Timer';
import MainContainer from './components/MainContainer';
import Config from './components/Config';


import logo from './logo.svg';
import './App.css';




class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          
          
          <Route exact path="/" component={MainContainer} />
          <Route path="/config" component={Config} />

        </div>
      </Router>
    );
  }
}

export default App;
