import React, { Component } from 'react';
import Timer from './Timer';
import Header from './Header';


class MainContainer extends Component {
   


    constructor(props) {
        super(props);

        console.log(props);

        this.state = props.allProps;
        //{...props.allProps, players:[]};


        this.countAll = props.countAll;
        this.move = props.move;
        console.log(props.move);

        this.pauseAll  = this.pauseAll.bind(this);
        this.reset  = this.reset.bind(this);

    }

    pauseAll(){
    	//call on component method pause
    	this.state.players.forEach(el=>el.ref.current.pause(this/*null*/, false))
    	
    }


    reset(){

    	let initSettings = {

			seconds: this.state.basicTime * 60,
			byoyomiPeriods:this.state.byoyomiPeriods,
			byoyomiTime:this.state.byoyomiTime,
			moveNo:0,

    	}

    	this.state.players.forEach(el=>el.ref.current.reset( initSettings ))
    }

    render() {

    	//console.log(this.state.playersTime);
    	
    	const playersTemp  = this.state.playersTime.map((el, ind)=>{

    		

    		let timerRef = React.createRef();

    		return (
    			<Timer 

    				ref={timerRef}
					key={ind}

    				playerNo={ el.playerNo }
    				seconds={+el.basicTime * 60 }
            		basicTime={ +el.basicTime } 
            		
            		byoyomiPeriods={el.byoyomiPeriods} 
            		byoyomiTime={el.byoyomiTime}

            		moveNo={el.moveNo}
            		pause={el.pause}

            		countAll={this.countAll}
            		move={this.move}
            		
            		/>	
    			)
    		
    	});

        return (
        	<div>
        		<Header/>

        		<div>{process.env.REACT_APP_NOT_SECRET_CODE}</div>
        		
            	{ playersTemp }
            	
            	<div><button onClick={this.pauseAll}>Triger Pause all</button></div>
            	<div><button onClick={this.reset}>Reset all</button></div>
        	</div>
            
        );
    }
}

export default MainContainer;
