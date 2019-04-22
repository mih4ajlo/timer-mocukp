import React, { Component } from 'react';

import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";


import MainContainer from './components/MainContainer';
import Config from './components/Config';
import SubPage from './components/SubPage';

import {withFirebase} from './components/Firebase';

//import logo from './logo.svg';

import './App.css';

import {initialData} from './data/initialData';


class App extends Component {


  constructor(props){
    super(props);

    //set initial data from data file 
    this.state = initialData;


    this.move = this.move.bind(this);
    this.tick = this.tick.bind(this);
    this.updateGlobalState = this.updateGlobalState.bind(this);
    this.allMovesCounter = this.allMovesCounter.bind(this);
    this.resetAllMovesCounter = this.resetAllMovesCounter.bind(this);

        
  }



  resetAllMovesCounter(){


     this.setState( state => {            

        let allTimes = [];

          //resetovanje kad su svi istih vremena

          this.state.playersTime.forEach((el,ind)=>{
              allTimes[ind] = { 

                playerNo: ind,

                seconds: this.state.seconds || this.state.basicTime , /*7158*/
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



    tick(playerNo = 0, basicTimeOver = false, byoyomiTime, byoyomiPeriods ){

        this.setState( state => {

            console.log( state.playersTime[playerNo] );
            //return;




            //ovde ce morati da se update-uje i sistem byoyomija
            //treba mi flag da je regularno vreme isteklo
            //ako je regularno vreme isteklo, resetuj vreme na max byoyomija
            
            let nizIgracaTemp =  state.playersTime;
            

            if(!basicTimeOver){
                //funk
                //
                // state.playersTime[playerNo] : {state.playersTime[playerNo]}
                // 
                if( !nizIgracaTemp[playerNo].pause ) {
                  nizIgracaTemp[playerNo].seconds = nizIgracaTemp[playerNo].seconds - 1
                  
                }
                    
            }
            else if( nizIgracaTemp[playerNo].seconds > 0 && byoyomiPeriods > 0) { //kad se byoyomi time umanjuje?
                //setuje se na celokupno byoyomi vreme
                nizIgracaTemp[playerNo].seconds = nizIgracaTemp[playerNo].byoyomiTime;
                nizIgracaTemp[playerNo].basicTimeOver = true;

            }

            else if(nizIgracaTemp[playerNo].seconds == 0 && byoyomiPeriods > 0) {
                
                nizIgracaTemp[playerNo].seconds = nizIgracaTemp[playerNo].byoyomiTime;
                nizIgracaTemp[playerNo].basicTimeOver = true;
                nizIgracaTemp[playerNo].byoyomiPeriods = nizIgracaTemp[playerNo].byoyomiPeriods - 1;

            }
            else {
                //bP == 0
                nizIgracaTemp[playerNo].seconds = 0
                nizIgracaTemp[playerNo].basicTimeOver = true;
                nizIgracaTemp[playerNo].byoyomiPeriods = 0;
                nizIgracaTemp[playerNo].pause = true;

            }

            return { playersTime:nizIgracaTemp   }
            
        }) ;

        //console.log(this.state);
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

    const rutaConfig = (<Route path="/config" key="config_deo"
              component={
                  (props)=>
                      <Config 
                          allProps={this.state} 
                          updateGlobalState={this.updateGlobalState} />
                        }  
          />);

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
                                tick={this.tick}

                                rutaConfig={rutaConfig}

                                />
                              }  
          />

          {rutaConfig}

          <Route path="/sub" key="sub_page"
              component={
                  (props)=>
                      <SubPage {...props}/>
                        }  
          />
          

        </div>
      </Router>
    );
  }
}

export default App;
