import React,  { Component } from 'react';
import Header from './Header';

import {settings} from '../data/initialData'

/*

	config window with elements
	setting config values, spiner, toggles, stuff like that


*/

class Config extends Component {
   

    constructor(props) {
        super(props);

        this.state = props.allProps;

        this.updateGlobalState = props.updateGlobalState;

        this.handleChange = this.handleChange.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleChange3 = this.handleChange3.bind(this);
    }

    

    handleChange (ev) {
        

        //ako je basic time nula, setuj flag
      this.setState({ basicTime:+ev.target.value * 60, basicTimeOver:+ev.target.value == 0 ? true:false })  
    } 

    handleChange2 (ev) {
        
      this.setState({ byoyomiTime:ev.target.value }) 

      //console.log(ev.target.value); 
      //vs
      //console.log(this.state.byoyomi); 
      //daju razlicite rezultate; 
      //setState je asyn, sem ako se ne prosledi trenutno i buduce stanje, 
      //ali i to je unutar samo handlera
    } 

    handleChange3 (ev) {
        
      this.setState({ byoyomiPeriods:ev.target.value })  

    } 

    
    returnSelectOption(item){
        return (
            <option  key={item.id} value={item.name}>{item.name}</option>
            );
    }


    setAll(ev){

        //napraviti generisanje ovog objekta, 
        //u zavisnosti od broja igraca i takvih stvari

        //ovo mora da se setuje spram broja igraca

        console.log(this.state);

        this.updateGlobalState/*setState*/({

                basicTime:+this.state.basicTime,
                byoyomiTime:this.state.byoyomiTime,
                byoyomiPeriods:this.state.byoyomiPeriods,
                totalMoves:0,

                //mora da uzme broj igraca i ostale parametre i da generise ostatak

            
                playersTime:[
                    {
                        seconds:+this.state.basicTime,
                        basicTime:this.state.basicTime,
                        basicTimeOver:+this.state.basicTime == 0 ? true:false ,
                        byoyomiTime: this.state.byoyomiTime,
                        byoyomiPeriods:this.state.byoyomiPeriods,
                        moveNo:0,
                        playerNo:0,
                    },
                    {
                        seconds:+this.state.basicTime,
                        basicTime:this.state.basicTime,
                        basicTimeOver:+this.state.basicTime == 0 ? true:false ,
                        byoyomiTime: this.state.byoyomiTime,
                        byoyomiPeriods:this.state.byoyomiPeriods,
                        moveNo:0,
                        playerNo:1,
                    },
                ]
            

             

        })
    }

    render() {
        return (
            <div>
                
                <div>Config page</div> 

                <button 
                    icon="refresh" 
                    text="button content" 
                    onClick={(ev)=>this.setAll(ev)}
                >Koje kude</button>

               

                <div className="form ">

                    <div>
                        <label htmlFor="brIgraca">Broj igraca</label>
                        <input type="number" name="brIgraca" disabled value={this.state.playersNo}/>
                    </div>

                    <div>
                        <label htmlFor="basicTime">Osnovno vreme</label>
                        <select name="basicTime" value={this.state.basicTime} onChange={this.handleChange}>
                            {settings.osnovnoVreme.map(el=>this.returnSelectOption(el))}
                        </select>
                    </div>
                    
                    <div>
                        <label htmlFor="byoyomiTime">Vreme za byoyomi</label>
                        <select name="byoyomiTime" value={this.state.byoyomiTime} onChange={this.handleChange2}>
                            {settings.byoyomiVreme.map(el=>this.returnSelectOption(el))}
                        </select> 

                    </div>

                    <div>
                        <label htmlFor="byoyomiPeriods">Byoyomi Periods</label>
                        <input name="byoyomiPeriods" type="number" value={this.state.byoyomiPeriods} onChange={this.handleChange3}/>
                    </div>

                    

                </div> {/*<!--forma-->*/}
               


            </div>
           
        );
    }
}

export default Config;
