import React, { Component } from 'react';
import { Link } from "react-router-dom";

import SignOutButton from './SignOut';




const Header = ({ authUser }) => (

    <header>{authUser ? <HeaderAuth /> : <HeaderNonAuth/> }</header>

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