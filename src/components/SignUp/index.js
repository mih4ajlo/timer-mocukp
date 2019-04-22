import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import {withFirebase} from '../Firebase';

import * as ROUTES from '../../constants/routes';
//






const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class SignUpFormBase extends Component {
  

    constructor(props) {
        super(props);

        this.state = {...INITIAL_STATE};

        this.onChange  = this.onChange.bind(this);
        this.onSubmit  = this.onSubmit.bind(this); 
    }

    onSubmit(ev){

        const {username, passwordOne, email} = this.state;

        this.props.firebase
            .doCreateUserWithEmailAndPassword(email, passwordOne)
            .then( authUser =>{
                this.setState({...INITIAL_STATE});
                this.props.history.push(ROUTES.HOME);
            })
            .catch(error=>{
                this.setState({ error });
            });

        ev.preventDefault();

    }

    onChange(ev){

        this.setState({
            [ev.target.name]:ev.target.value,
        })

    }

    render() {

        const {
            username,
            email,
            passwordOne,
            passwordTwo,
            error,
        } = this.state; 

        const isInvalid = (
            passwordTwo !== passwordOne ||
            passwordOne === '' ||
            username === '' ||
            email === ''
        )

        return (
            <form onSubmit={this.onSubmit}>

                <input 
                    type="text"
                    name="username"
                    value={username}
                    onChange={this.onChange}
                    placeholder="Full name"
                />
                <input 
                    type="text"
                    name="email"
                    value={email}
                    onChange={this.onChange}
                    placeholder="Email Address"
                />
                <input 
                    type="text"
                    name="passwordOne"
                    value={passwordOne}
                    onChange={this.onChange}
                    placeholder="Password"
                />
                <input 
                    type="text"
                    name="passwordTwo"
                    value={passwordTwo}
                    onChange={this.onChange}
                    placeholder="Confirm Password"
                />

                <button disabled={isInvalid} type="submit">Sign up</button>

                {error && <p>{error.message}</p>}
            </form>
        );
    }
}

const SignUpLink = ()=>{
	return (<p>
		Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
	</p>)
}



const SignUpForm = withRouter( withFirebase(SignUpFormBase) ) ;




const SignUpPage = () => {
    return (
        <div>
          <h1>SignUp</h1>
        
            <SignUpForm />    
        
       </div>
    );
}


export default SignUpPage;

export {SignUpForm, SignUpLink};
