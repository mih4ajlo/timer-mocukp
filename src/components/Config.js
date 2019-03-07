import React, { Component, PropTypes } from 'react';
import Header from './Header';

/*

	config window with elements
	setting config values, spiner, toggles, stuff like that


*/

class Config extends Component {
   

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header/>
                <div>Config page</div> 
            </div>
           
        );
    }
}

export default Config;
