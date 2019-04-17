import React, { Component } from 'react';

import { BrowserRouter as Router, Route } from "react-router-dom";


import MainContainer from './components/MainContainer';
import Config from './components/Config';


//import logo from './logo.svg';

import './App.css';

import {initialData} from './data/initialData';


class App extends Component {


  constructor(props){
    super(props);

    //set initial data from data file 
    this.state = initialData;


    this.move = this.move.bind(this);
    this.updateGlobalState = this.updateGlobalState.bind(this);
    this.allMovesCounter = this.allMovesCounter.bind(this);
    this.resetAllMovesCounter = this.resetAllMovesCounter.bind(this);
        
  }



  resetAllMovesCounter(){

  }

  allMovesCounter(playerNo, singleTimerParams){

      //XXX zasto se ne pamti stanje vrednosti za vremena

      let igraci = this.state.playersTime ;

      igraci[playerNo] = singleTimerParams;

      this.setState({
         totalMoves : +this.state.totalMoves + 1,
         playersTime: igraci
       })

  }


  move(component, single = false, playerNo = null ){

      //const single = true ;



       
      this.setState( prev => {

          
          let changedState = prev.playersTime;

          let totalMoveNo ;

          if ( single ) {
            
          
              changedState[playerNo].pause = true; 
              changedState[playerNo].moveNo = changedState[playerNo].moveNo + 1; 


              changedState[ (playerNo+1 )% changedState.length ].pause = false; //svi ostali su na pauzi

              totalMoveNo = prev.totalMoves + 1;
          }
          else {

            changedState.forEach(el=> el.pause = true);
            totalMoveNo = prev.totalMoves ;
            
          }
          

          return {...prev, playersTime:changedState, totalMoves: totalMoveNo};

      });

     /* if(single){

          this.countAll( this.state.playerNo, this.state );
      }*/


  }

  //config.js
  updateGlobalState( newState ){
   
    //console.log( newState);

    this.setState( newState );
    
  }


  render() {
    return (
      <Router>
        <div className="App" >
          
          <div>{this.state.totalMoves}</div>
          
          <Route exact path="/" 
                    component={
                        (props)=>
                            <MainContainer 
                                allProps={this.state} 
                                countAll={this.allMovesCounter}
                                move={this.move}/>
                              }  
                            />
          <Route path="/config" 
                    component={
                        (props)=>
                            <Config 
                                allProps={this.state} 
                                updateGlobalState={this.updateGlobalState} />
                              }  
                            />

        </div>
      </Router>
    );
  }
}

export default App;
