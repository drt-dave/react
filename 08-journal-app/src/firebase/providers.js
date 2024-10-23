import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, updateProfile   } from 'firebase/auth';
import {FirebaseAuth} from './config';

const googleProvider = new GoogleAuthProvider();

//signInWithGoogle
export const signInWithGoogle = async() => {
  try {

	const result = await signInWithPopup( FirebaseAuth, googleProvider );
	const { displayName, email, photoURL, uid } = result.user;

	return {
	  ok: true,
	  //User info
	  displayName, email, photoURL, uid 
	}

  } catch ( error ){

	const errorMessage = error.message;

	return {
	  ok: false,
	  errorMessage,
	}

  }
}

//registerUserWithEmailPassword
export const registerUserWithEmailPassword = async ({ email, password, displayName }) => { 

  try {
	console.log({ email, password, displayName });
	const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
	const { uid, photoURL  } = resp.user
	await updateProfile(FirebaseAuth.currentUser, { displayName });
	return {
	  ok: true,
	  uid, photoURL, email, displayName
	}
  } catch (error) {
	// console.log(error);
	return { ok: false, errorMessage: error.message }
  }
} 

//loginWithEmailPassword 
export const loginWithEmailPassword = async ({email, password}) => { 
  try {
	const resp = await signInWithEmailAndPassword(FirebaseAuth, email, password);
	const { uid, displayName, photoURL  } = resp.user

	return {
	  ok: true,
	  uid, photoURL, displayName
	}
  } catch (error) {
	return { ok: false, errorMessage: error.message }
  }

  //! signInWithEmailAndPassword
} 

export const logoutFirebase = async() => {
  return await FirebaseAuth.signOut();
}

