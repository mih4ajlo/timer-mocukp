import React, {Component}  from 'react';


//nije mi jasno zasto je stavio u klasu a ne obicnu promenljivu 
//zbog props-a?

const withAuthentication = Component => {
	class WithAuthentication extends Component{
		render (){
			return <Component {...this.props}/>
		}
	}

	return WithAuthentication;
}

export default withAuthentication;
