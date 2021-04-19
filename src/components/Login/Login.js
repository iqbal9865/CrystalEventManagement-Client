import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import Navbar from '../Shared/Navbar/Navbar';
import { useHistory, useLocation } from 'react-router';
const Login = () => {
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
    const [logInUser, setLogInUser] = useContext(UserContext);

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
      }

   const handleGoogleSignIn = () => {
   var provider = new firebase.auth.GoogleAuthProvider();
   firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    var credential = result.credential;
    var token = credential.accessToken;
    const { displayName, email } = result.user;
    const signedInUser = { name: displayName, email }
      setLogInUser(signedInUser);
      history.replace(from);
  }).catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;
    console.log('error : ',errorCode,errorMessage,email,credential)
  });
}
    return (
        <div>
            <Navbar></Navbar>
            <button onClick={handleGoogleSignIn} style={{padding:'10px 20px', borderRadius:'1em'}}>SIGN IN WITH GOOGLE</button>
        </div>
    );
};

export default Login;