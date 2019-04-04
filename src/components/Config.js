import React,  {ReactDOM, Component, PropTypes } from 'react';
import Header from './Header';


//import Button from './Button';

//https://material-ui-pickers.dev/getting-started/installation


/*

	config window with elements
	setting config values, spiner, toggles, stuff like that


*/

/*

playerNo:2,
players:[],
basicTime:"5m",
byoyomiTime:"3x15s",
byoyomi:false,

 */

class Config extends Component {
   

    constructor(props) {
        super(props);

        this.state = {
            minPlayersNo:2,
            playersNo:2,
            playersTime:[
                {
                    basicTime:0,
                    byoyomiTime:0,
                    byoyomiPeriods:0,
                },
                {
                    basicTime:0,
                    byoyomiTime:0,
                    byoyomiPeriods:0,
                },
            ],
            value:5,
            byoyomi:'3x15s',
            byoyomiPeriods:0,
            niz:
                [
                    {"name":'5m' , "id":1},
                    {"name":'10m' , "id":2},
                    {"name":'15m', "id":3} ,
                    {"name":'30m', "id":4} ,
                    {"name":'45m', "id":5} ,
                    {"name":'60m', "id":6} ,
                ],
            niz2:[
                    {"name":'10s' , "id":'10s'},
                    {"name":'20s' , "id":'20s'},
                    {"name":'30s' , "id":'30s'},
                    {"name":'45s' , "id":'45s'},
                    {"name":'60s', "id":'60s'} 
            ],
            
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleChange3 = this.handleChange3.bind(this);
    }

    

    handleChange (ev) {
        
      this.setState({ value:ev.target.value })  
    } 

    handleChange2 (ev) {
        
      this.setState({ byoyomi:ev.target.value }) 

      //console.log(ev.target.value); 
      //vs
      //console.log(this.state.byoyomi); 
      //daju razlicite rezultate; 
      //setState je asyn, sem ako se ne prosledi trenutno i buduce stanje, 
      //ali i to je unutar samo handlera
    } 

    handleChange3 (ev) {
        
      this.setState({ byoyomiPeriods:ev.target.value })  

      console.log( this.state.byoyomiPeriods);
    } 

    
    returnSelectOption(item){
        return (
            <option  key={item.id} value={item.name}>{item.name}</option>
            );
    }


    setAll(ev){
        this.setState((prev, next)=>{

            const la = {
                playersTime:[
                    {
                        basicTime:prev.value,
                        byoyomiTime: prev.byoyomi,
                        byoyomiPeriods:prev.byoyomiPeriods,
                    },
                    {
                        basicTime:prev.value,
                        byoyomiTime: prev.byoyomi,
                        byoyomiPeriods:prev.byoyomiPeriods,
                    },
                ]};

            console.log(la);
            debugger
            return {prev,playersTime:la.playersTime};

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
                        <select name="basicTime" value={this.state.value} onChange={this.handleChange}>
                            {this.state.niz.map(el=>this.returnSelectOption(el))}
                        </select>
                    </div>
                    
                    <div>
                        <label htmlFor="byoyomiTime">Vreme za byoyomi</label>
                        <select name="byoyomiTime" value={this.state.byoyomi} onChange={this.handleChange2}>
                            {this.state.niz2.map(el=>this.returnSelectOption(el))}
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
