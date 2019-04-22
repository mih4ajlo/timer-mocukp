
//https://www.robinwieruch.de/complete-firebase-authentication-react-tutorial/#react-firebase
//https://www.robinwieruch.de/firebase-tutorial/

//zeznuto - treba posvetiti ceo dan ovom cudu

import app from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID
};


class Firebase {
   
    constructor(props) {
        app.initializeApp(config);

        this.auth = app.auth();
    }

    doCreateUserWithEmailAndPassword = (email,password) =>{
    	console.log(email, password);
    	return this.auth.createUserWithEmailAndPassword(email, password);
    }

    doSignInWithEmailAndPassword = (email, password) =>{
    	return this.auth.signInWithEmailAndPassword(email, password);
    }
    
    doSignOut = ()=>{
    	return this.auth.signOut()
    }

    doPasswordReset = email => {
    	return this.auth.sendPasswordResetEmail(email);
    }

  	doPasswordUpdate = password =>{
    	return this.auth.currentUser.updatePassword(password);  	
	}
}

export default Firebase;
