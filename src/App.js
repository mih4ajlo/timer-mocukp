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



     this.setState( state => {            

            let allTimes = [];

              this.state.playersTime.forEach((el,ind)=>{
                  allTimes[ind] = { 

                    playerNo: ind,

                    seconds: this.state.seconds || this.state.basicTime * 60, /*7158*/
                    basicTime: this.state.basicTime,    

                    byoyomiPeriods: this.state.byoyomiPeriods,
                    byoyomiTime: this.state.byoyomiTime,

                    pause:true,
                    moveNo:0,
                }

            

              })

                return  {...state, playersTime:allTimes, totalMoves:0}

                
            });        
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


  move( single = false, playerNo = 0, singlePlayerParams ){

      //const single = true ;

      //console.log( "spp: ", singlePlayerParams );

      //XXX basicTimeOver, ako je isteklo vreme setuj byoyomi vreme
       
      this.setState( prev => {

          
          let changedState = prev.playersTime;

          let totalMoveNo ;

          if ( single ) {
            
            //uzimam ovo zbo tri parametra, sekundi, byoymi vremena i byoyomi perioda
            changedState[playerNo] = singlePlayerParams;


            changedState[playerNo].pause = true; 
            changedState[playerNo].moveNo = changedState[playerNo].moveNo + 1; 


            changedState[ (playerNo +1 )% changedState.length ].pause = false; //svi ostali su na pauzi



            totalMoveNo = prev.totalMoves + 1;
          }
          else {
            //kada se svi pauziraju, ne racunaju se potezi
            changedState.forEach(el=> el.pause = true);
            totalMoveNo = prev.totalMoves ;
            
          }
          

          return {...prev, playersTime:changedState, totalMoves: totalMoveNo};

      });

     

  }

  //config.js
  updateGlobalState( newState ){
   
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
                                move={this.move}
                                resetAllMovesCounter = {this.resetAllMovesCounter}
                                />
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
