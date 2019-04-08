import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";



import Timer from './components/Timer';
import MainContainer from './components/MainContainer';
import Config from './components/Config';


import logo from './logo.svg';
import './App.css';




class App extends Component {


  constructor(props){
    super(props);


    this.state = {
            minPlayersNo:2,
            playersNo:2,
            players:[],
            playersTime:[
                {
                    basicTime:1,
                    byoyomiTime:10,
                    byoyomiPeriods:3,
                    pause:false,
                },
                {
                    basicTime:1,
                    byoyomiTime:10,
                    byoyomiPeriods:3,
                    pause:false,
                },
            ],
            basicTime:10,
            byoyomi:'10',
            byoyomiPeriods:3,
            niz:
                [
                    {"name":'5' , "id":1},
                    {"name":'10', "id":2},
                    {"name":'15', "id":3} ,
                    {"name":'30', "id":4} ,
                    {"name":'45', "id":5} ,
                    {"name":'60', "id":6} ,
                ],
            niz2:[
                    {"name":'10' , "id":'10s'},
                    {"name":'20' , "id":'20s'},
                    {"name":'30' , "id":'30s'},
                    {"name":'45' , "id":'45s'},
                    {"name":'60' , "id":'60s'} 
            ],
            
        }


        this.updateFun = this.updateFun.bind(this);
  }

  updateFun( newState ){
   
    //console.log( newState);

    this.setState( newState );
    
  }


  render() {
    return (
      <Router>
        <div className="App" >
          
          
          <Route exact path="/" component={(props)=><MainContainer allProps={this.state} updateF={this.updateFun}/>}  />
          <Route path="/config" component={(props)=><Config allProps={this.state} updateF={this.updateFun} />}  />

        </div>
      </Router>
    );
  }
}

export default App;
