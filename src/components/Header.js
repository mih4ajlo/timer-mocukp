import React, { Component } from 'react';
import { Link } from "react-router-dom";


class Header extends Component {
    

   /* constructor(props) {
        super(props);
    }*/

    render() {
        return (
            <header>
        			<ul>
				      <li>
				        <Link to="/">Home</Link>
				      </li>
				      <li>
				        <Link to="/config">config</Link>
				      </li>
                      <li>
                        <Link to="/sub">sub</Link>
                      </li>

                      <li>
                        <Link to="/signIn">sign in</Link>
                      </li>
				      
				    </ul>
        		</header>
        );
    }
}

export default Header;
