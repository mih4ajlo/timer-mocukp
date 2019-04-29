import React, { Component } from 'react';

import { withFirebase } from '../Firebase';

const INITIAL_STATE = {
	passwordOne:'',
	passwordTwo:'',
	error:null
}


class PasswordChangeForm extends Component {
    
    constructor(props) {
        super(props);

        this.state = {...INITIAL_STATE };
    }

    onSubmit = event =>{
    	const { passwordOne } = this.state;

    	this.props.firebase.doPasswordUpdate(passwordOne)
    		.then((stagod)=>{
    			console.log(stagod);
    			this.setState({...INITIAL_STATE})
    		})
    		.catch((error)=>{
    			console.log("eerr", error);
    			this.setState({error})
    		});
    }

    onChange = event =>{
    	
    	this.setState({ [event.target.name]:event.target.value})
    }

    render() {

    	const {passwordOne, passwordTwo, error }  = this.state;

    	const isInvalid = (passwordOne !== passwordTwo) || (passwordOne =='');

    	

        return (
            <form onSubmit={this.onSubmit}>

            	<input 
            		name="passwordOne"
            		onChange={this.onChange}
            		value={passwordOne}
            		type="password"
            		placeholder="New Password"/>

            	<input 
            		name="passwordTwo"
            		onChange={this.onChange}
            		value={passwordTwo}
            		type="password"
            		placeholder="Confirm New Password"/>

            	<button disabled={isInvalid} type="submit">Reset My Password</button>

            </form>
        );
    }
}

export default withFirebase( PasswordChangeForm ) ;
