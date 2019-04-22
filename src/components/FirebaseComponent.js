import React from 'react';
import {FirebaseContext} from '../Firebase';

const FirebaseComponent = () =>{
	<FirebaseContext.Consumer>
		{firebase =>
			{
				return (<div>I've accessed to Firebase to render something</div>);
			}
		}
	</FirebaseContext.Consumer>
}

export default FirebaseComponent;