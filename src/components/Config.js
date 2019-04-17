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
        
      this.setState({ basicTime:ev.target.value })  
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

        debugger

        this.updateGlobalState/*setState*/({

                basicTime:this.state.basicTime,
                byoyomiTime:this.state.byoyomiTime,
                byoyomiPeriods:this.state.byoyomiPeriods,

            
                playersTime:[
                    {
                        basicTime:this.state.basicTime,
                        byoyomiTime: this.state.byoyomiTime,
                        byoyomiPeriods:this.state.byoyomiPeriods,
                    },
                    {
                        basicTime:this.state.basicTime,
                        byoyomiTime: this.state.byoyomiTime,
                        byoyomiPeriods:this.state.byoyomiPeriods,
                    },
                ]
            

             

        })
    }

    render() {
        return (
            <div>
                <Header/>
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
                            {settings.niz.map(el=>this.returnSelectOption(el))}
                        </select>
                    </div>
                    
                    <div>
                        <label htmlFor="byoyomiTime">Vreme za byoyomi</label>
                        <select name="byoyomiTime" value={this.state.byoyomiTime} onChange={this.handleChange2}>
                            {settings.niz2.map(el=>this.returnSelectOption(el))}
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
