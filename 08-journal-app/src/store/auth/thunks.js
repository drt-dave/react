// This file contains Redux actions related to authentication.

import {registerUserWithEmailPassword, signInWithGoogle, loginWithEmailPassword, logoutFirebase} from "../../firebase/providers";
import {clearNotesLogout} from "../journal/journalSlice";
import {checkingCredentials, login, logout} from "./"


//checkingAuthentication
export const checkingAuthentication = ( ) => { 
  return async(dispatch) => {
	dispatch( checkingCredentials() );
  }
} 


//startGoogleSignIn
export const startGoogleSignIn = () => { 


  return async( dispatch ) => {

	dispatch( checkingCredentials() );

	const result = await signInWithGoogle()
	if ( !result.ok ) return dispatch( logout( result.errorMessage ) );

	dispatch( login( result ) )
  }
} 


//startCreatingUserWithEmailPassword
export const startCreatingUserWithEmailPassword = ({ email, password, displayName }) => { 
  return async( dispatch ) => {

	//Marks the state as "checking" (verifying credentials
	dispatch( checkingCredentials() );

	//Calls the registerUserWithEmailPassword function from the Firebase provider (providers.js)
	const { ok, uid, photoURL, errorMessage } = await registerUserWithEmailPassword({ email, password, displayName });

	//If registration is successful, dispatches the login action

	//If fails, dispatches the logout action with the error message
	if (!ok) return dispatch( logout({ errorMessage }) )

	dispatch( login({ uid, displayName, email, photoURL }) );
  }
} 


//startLoginWithEmailPassword crear función respectiva en providers
export const startLoginWithEmailPassword = ({ email, password}) => { 
  return async( dispatch ) => {

	//Marks the state as "checking" (verifying credentials
	dispatch( checkingCredentials() );

	//Calls the loginWithEmailPassword function from the Firebase provider (providers.js)
	// const { ok, uid, photoURL, errorMessage } = await  loginWithEmailPassword ({ email, password });
	// if (!ok) return dispatch( logout({ errorMessage }) )
	// dispatch( login({ uid, email, photoURL }) );

	const result = await loginWithEmailPassword( { email, password } );

	if (!result.ok) return dispatch( logout( result ) );

	dispatch( login( result ) );
  }
}

export const startLogout = () => { 
  return async( dispatch ) => {

	await logoutFirebase();
	dispatch( clearNotesLogout() );
	dispatch( logout() );

  }
} 



