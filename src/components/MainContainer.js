import React, { Component } from 'react';
import Timer from './Timer';
import Header from './Header';


class MainContainer extends Component {
   
    constructor(props) {
        super(props);

        this.state = {
        	playerNo:2,
        	players:[],
        	basicTime:"5m",
        	byoyomiTime:"3x15s",
        	byoyomi:false,
        }

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
    	console.log(this.state);

    	//alert("koje kude mori")
    }

    render() {



    	this.state.players = [1,2].map((el, ind)=>{
    		return (
    			<Timer 
    				key={ind}
            		basicTime={318} 
            		byoyomi={true} 
            		byoyomiTime={this.state.byoyomiTime}
            		player="1"

            		pauseAll={this.pauseAll}
            		/>	
    			)
    		
    	});

        return (
        	<div>
        		<Header/>

            	{ this.state.players }
            	
            	<div><button onClick={this.pauseAll}>Triger Pause all</button></div>
        	</div>
            
        );
    }
}

export default MainContainer;
