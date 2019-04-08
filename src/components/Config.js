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

        this.state = props.allProps;

        this.updateF1 = props.updateF;

        this.handleChange = this.handleChange.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleChange3 = this.handleChange3.bind(this);
    }

    

    handleChange (ev) {
        
      this.setState({ basicTime:ev.target.value })  
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

        

        this.updateF1/*setState*/({

            
                playersTime:[
                    {
                        basicTime:this.state.basicTime,
                        byoyomiTime: this.state.byoyomi,
                        byoyomiPeriods:this.state.byoyomiPeriods,
                    },
                    {
                        basicTime:this.state.basicTime,
                        byoyomiTime: this.state.byoyomi,
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
