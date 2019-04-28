import React, { Component } from 'react';
import { Link } from "react-router-dom";

import SignOutButton from './SignOut';

import { AuthUserContext } from './Session'


const Header = ({ authUser }) => (
  <AuthUserContext.Consumer>{authUser =>
    <header>{authUser ? <HeaderAuth /> : <HeaderNonAuth/> }</header>
  }
  </AuthUserContext.Consumer>
);


const HeaderAuth = () => (


    <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/config">config</Link>
              </li>
                      
              <li>
                <SignOutButton/>
              </li>
              
            </ul>


);



const HeaderNonAuth = () => (


    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      
      
      <li>
        <Link to="/signIn">sign in</Link>
      </li>

    </ul>


);



export default Header;