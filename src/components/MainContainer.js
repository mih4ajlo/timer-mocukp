import React, { Component } from 'react';
import Timer from './Timer';
import Header from './Header';


class MainContainer extends Component {
   
    constructor(props) {
        super(props);

        console.log(props);

        this.state = {...props.allProps, players:[]};


        this.pauseAll  = this.pauseAll.bind(this);

    }

    pauseAll(){
    	//treba da pozove metodu pauza u svim komponentama
    	//verovatno znaci da mora da se ubaci neki handler/nesto
    	//i da mora da se pravi dinamicki broj komponenata
    	/*this.state.players.forEach(el=>{
    		el.pause();	
    	})*/

    	/*XXX verovatno treba forward ref */
    	
    	console.log(this.state.players);
    	

    	//alert("koje kude mori")
    }

    render() {

    	//console.log(this.state.playersTime);
    	
    	this.state.players = this.state.playersTime.map((el, ind)=>{


    		console.log("sta bre", el );

    		return (
    			<Timer 
    				key={ind}
            		basicTime={ el.basicTime * 60} 
            		byoyomi={el.basicTime} 
            		byoyomiTime={+this.state.byoyomiTime}
            		player="1"

            		pauseAll={this.pauseAll}
            		/>	
    			)
    		
    	});

        return (
        	<div>
        		<Header/>

        		<div>{process.env.REACT_APP_NOT_SECRET_CODE}</div>
        		
            	{ this.state.players }
            	
            	<div><button onClick={this.pauseAll}>Triger Pause all</button></div>
        	</div>
            
        );
    }
}

export default MainContainer;
