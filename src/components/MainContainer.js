import React, { Component } from 'react';
import Timer from './Timer';
import Header from './Header';


import { BrowserRouter as Router, Route } from "react-router-dom";


class MainContainer extends Component {
   


    constructor(props) {
        super(props);

//        console.log(props);

        this.state = props.allProps;
        //{...props.allProps, players:[]};
        this.resetAllMovesCounter = props.resetAllMovesCounter;

        this.countAll = props.countAll;
        this.move = props.move;
        this.tick = props.tick;

        this.rutaConfig = props.rutaConfig;

        console.log("ruta",this.rutaConfig);

        this.pauseAll  = this.pauseAll.bind(this);
        this.reset  = this.reset.bind(this);

    }

    pauseAll(){
    	//call on component method pause
    	this.state.players.forEach(el=>el.ref.current.move( false, el.playerNo))
    	
    }


    reset(){

    	//ne moze da se izdvoji u poseban fajl, 
    	//zato sto zavisi od drugih parametara
    	

    	let initSettings = {

			seconds:  this.state.basicTime ,
			byoyomiPeriods:this.state.byoyomiPeriods,
			byoyomiTime:this.state.byoyomiTime,
			moveNo:0,
			pause:false,

    	}

    	this.state.players.forEach( el => el.ref.current.reset( initSettings ) );
    }

    render() {

    	//console.log(this.state.playersTime);
    	
    	const playersTemp  = this.state.playersTime.map((el, ind)=>{

    		let timerRef = React.createRef();

    		return (
    			<Timer 

    				ref={timerRef}
					key={ind}

					playerState =  {el}

    				tick1 = { this.tick }

            		countAll={this.countAll}
            		move={this.move}
            		
            		/>	
    			)
    		
    	});


    	//zasta mi ovo treba u state-u? da li se negde koriste componente?
    	//this.state.players = playersTemp;
    	let elements_temp = [];

    	for (var i = 0; i < playersTemp.length; i++) {

    		const that = this;
    		if(i%2==1)
    			elements_temp.push(
    				<div id="centralControls" key={"kontrole"}>
    					<div><button onClick={that.pauseAll}>Triger Pause all</button></div>
            			<div><button onClick={that.resetAllMovesCounter}>Reset all</button></div>
            			{that.rutaConfig}

    				</div>
    				) ;
    		elements_temp.push( playersTemp[i] ) ;
    	}

		
		console.log( elements_temp );

    	//

        return (
        	<div>
        		<Header/>

        		<div>{process.env.REACT_APP_NOT_SECRET_CODE}</div>
        		<div id="timerContainer">
        			{ elements_temp }
        		</div>
            	
            	
            	
        	</div>
            
        );
    }
}

export default MainContainer;
