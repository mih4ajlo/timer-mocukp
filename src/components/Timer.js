import React, { Component } from 'react';

class Timer extends Component {
    

    constructor(props) {

        super(props);

        //referenced higher methods
        this.countAll = props.countAll;
        this.move = props.move;
        this.updateSingleState = props.updateSingleState;

        this.state = props.playerState;


        this.tick1 = props.tick1;


        this.pauseProxy = this.pauseProxy.bind(this);  
        
    }




    pauseProxy(component){
        
        //mora da ide ceo niz sa preostalim vremenom i byoyomi periodima i svim ostalim
        

        this.move(  true, this.state.playerNo, this.state );
    }





    componentDidMount(){
        //mislim da ovaj mora da okine setovanje stananja kada se istrosi regularno vreme
        this.interval = setInterval( () => {


            if(this.state.pause)
                return;

            //console.log(this.state);
            //ovo se ne menja ovde

            if(this.state.seconds == 0 && !this.state.basicTimeOver ){
                this.tick1(this.state.playerNo, true/*basic time is over*/,this.state.byoyomiTime, this.state.byoyomiPeriods );    
            }
            else if(this.state.seconds == 0 && this.state.basicTimeOver && this.state.byoyomiPeriods == 0 ){
                this.tick1(this.state.playerNo,true, 0/*byoyomiVreme*/, 0/*byoyomiPeriodi*/); //XXX - over, kraj, ende
            }
            else if(this.state.seconds == 0 && this.state.basicTimeOver && this.state.byoyomiPeriods > 0 ){
                this.tick1(this.state.playerNo,true, 0/*byoyomiVreme*/, this.state.byoyomiPeriods); //XXX - over, kraj, ende
            }
            this.tick1( this.state.playerNo, );
            

        }, 1000);
    }

    componentWillUnmount() {
        clearInterval( this.interval );
    }

   
    render() {

        //XXX premature optimization
        //--nema potrebe da se racuna svaki put broj preostalih sati , 
        //--samo kad je broj sekundi mnozilac broja 3600
        //if()

                    //~~ == Math.floor
        let hours = Math.floor(this.state.seconds / 3600);



        let minutes =  Math.floor( (this.state.seconds - hours * 3600) / 60);
        let seconds =  this.state.seconds - minutes * 60 - hours * 3600;

        
        if(this.state.seconds === 0){
            //treba da se stopira, ako je istekao byoyomi, 
            //ili ako je sd (nema byoyomija)
            if(this.state.byoyomiTime){

                alert("sta god",this.state.byoyomiTime)
                //console.log(this.state);
            }
            //clearInterval( this.interval );
        }


        return  (
            <div >
                <div>
                    Broj poteza {this.state.moveNo}
                </div>
                <span> hours:{hours}, minutes:{minutes}, seconds: {seconds} </span>
                <div>byoyomi periods: {this.state.byoyomiPeriods}, byoyomi time: {this.state.byoyomiTime}</div>
                <div>ovde da ide cela povrsina; podeljeno na dva ekrana, da se klikne</div>
                <div> <button onClick={this.pauseProxy}>Move</button> </div>
            </div>
        );
    }
}

export default Timer;

