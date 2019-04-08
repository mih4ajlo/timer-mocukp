import react from 'react';

import React, { Component, forwardRef, useRef, useImperativeHandle } from 'react';

class Timer extends Component {
    

    constructor(props) {
        super(props);

        //console.log( props );

        this.state = { 
            seconds: props.basicTime * 60 /*7158*/,
            pause:props.pause,
            byoyomiPeriods:props.byoyomiPeriods,
            byoyomi:props.byoyomi ,
            };


        //this.timerRef = React.createRef();

        this.pause = this.pause.bind(this);    
    }

    tick(){

        this.setState(state=>{
            
            if( !state.pause )
            
            return {seconds : state.seconds - 1,}
            
        }) ;
    }

    pause(){

        this.setState( state => ({ pause : !state.pause }) )

    }

    componentDidMount(){
        this.interval = setInterval( () => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval( this.interval );
    }




    render() {

                    //~~ == Math.floor
        let hours = Math.floor(this.state.seconds / 3600);



        let minutes =  Math.floor( (this.state.seconds - hours * 3600) / 60);
        let seconds =  this.state.seconds - minutes * 60 - hours * 3600;

        //prvo da idemo u nazad
        
        if(this.state.seconds == 0){
            //treba da se stopira, ako je istekao byoyomi, 
            //ili ako je sd (nema byoyomija)
            if(this.state.byoyomi){
                alert("sta god",this.state.byoyomiTime)
                //console.log(this.state);
            }
            clearInterval( this.interval );
        }


        return  (
            <div >
                <span> hours:{hours}, minutes:{minutes}, seconds: {seconds} </span>
                <div>ovde da ide cela povrsina; podeljeno na dva ekrana, da se klikne</div>
                <div> <button onClick={this.pause}>Pause</button> </div>
            </div>
        );
    }
}

export default Timer;

export const pauseT = Timer.prototype.pause;

export const timerState = Timer.prototype.state;