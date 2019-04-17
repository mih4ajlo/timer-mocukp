import React, { Component } from 'react';

class Timer extends Component {
    

    constructor(props) {

        super(props);

        this.countAll = props.countAll;
        this.move = props.move;

        this.state = {

            playerNo:props.playerNo, //redni broj igraca

            seconds: +props.basicTime * 60, /*7158*/
            basicTime: +props.basicTime,
            
            byoyomiTime:props.byoyomiTime,
            byoyomiPeriods:props.byoyomiPeriods,
            
            pause:props.pause,
            moveNo:props.moveNo,
        };


        //this.timerRef = React.createRef();

        /*this.move = this.move.bind(this);  */
        this.pauseProxy = this.pauseProxy.bind(this);  
        this.reset = this.reset.bind(this);    
    }



    tick(){

        this.setState( state => {
            
            if( !state.pause )
                return { seconds : state.seconds - 1,}
            
        }) ;
    }



    reset( initSettings ){

        this.setState( state => {            

                return { 
                    seconds: +initSettings.seconds, /*7158*/
                    basicTime: +initSettings.basicTime,    

                    byoyomiPeriods: +initSettings.byoyomiPeriods,
                    byoyomiTime: +initSettings.byoyomiTime,

                    pause:true,
                    moveNo:0,
                }
            });        

    }


   

    pauseProxy(component){
        
        this.move( component, true, this.state.playerNo );
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
        
        if(this.state.seconds === 0){
            //treba da se stopira, ako je istekao byoyomi, 
            //ili ako je sd (nema byoyomija)
            if(this.state.byoyomiTime){
                alert("sta god",this.state.byoyomiTime)
                //console.log(this.state);
            }
            clearInterval( this.interval );
        }


        return  (
            <div >
                <div>
                    Broj poteza {this.state.moveNo}
                </div>
                <span> hours:{hours}, minutes:{minutes}, seconds: {seconds} </span>
                <div>ovde da ide cela povrsina; podeljeno na dva ekrana, da se klikne</div>
                <div> <button onClick={this.pauseProxy}>Pause</button> </div>
            </div>
        );
    }
}

export default Timer;

