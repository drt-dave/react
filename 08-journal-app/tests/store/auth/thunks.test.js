import {loginWithEmailPassword, logoutFirebase, signInWithGoogle} from "../../../src/firebase/providers";
import {checkingCredentials, login, logout, startGoogleSignIn, startLoginWithEmailPassword, startLogout} from "../../../src/store/auth"
import {checkingAuthentication} from "../../../src/store/auth/thunks"
import {clearNotesLogout} from "../../../src/store/journal/journalSlice";
import {demoUser} from "../../fixtures/authFixtures";

// Se agrego esto en jest.config.cjs  transformIgnorePatterns: [],

// Todas las funciones que regresen de este path son un mock
jest.mock("../../../src/firebase/providers")

describe('Pruebas en AuthThunks', () => {

  const dispatch = jest.fn();

  beforeEach( () => jest.clearAllMocks()  );

  it('Debe invocar el checkingCredentials ', async() => {

	await checkingAuthentication()( dispatch );
	expect( dispatch ).toHaveBeenCalledWith( checkingCredentials() );
  });

  it('startGoogleSignIn debe llamar checkingCredentials y login - Exito', async() => {

	const loginData = { ok: true, ...demoUser };

	//mock
	await signInWithGoogle.mockResolvedValue( loginData );

	//thunk
	await startGoogleSignIn()( dispatch );
	expect( dispatch ).toHaveBeenCalledWith( checkingCredentials() );
	expect( dispatch ).toHaveBeenCalledWith( login( loginData ) );
  });

  it('startGoogleSignIn debe llamar checkingCredentials y logout - Error ', async() => {

	const loginData = { ok: false, errorMessage: 'Un error en Google' };

	//mock
	await signInWithGoogle.mockResolvedValue( loginData );

	//thunk
	await startGoogleSignIn()( dispatch );
	expect( dispatch ).toHaveBeenCalledWith( checkingCredentials() );
	expect( dispatch ).toHaveBeenCalledWith( logout(loginData.errorMessage ) );
  });

  it('startLoginWithEmailPassword debe llamar checkingCredentials y login - Exito', async() => {

	const loginData = { ok: true, ...demoUser };
	const formData = { email: demoUser.email, password:'123456' };

	await loginWithEmailPassword.mockResolvedValue( loginData );
	await startLoginWithEmailPassword(formData)( dispatch );

	expect( dispatch ).toHaveBeenCalledWith( checkingCredentials() );
	expect( dispatch ).toHaveBeenCalledWith( login(loginData) );
  })

  it('startLoginWithEmailPassword debe llamar checkingCredentials y logout - Error', async() => {

	const loginData = { ok: false, ...demoUser };
	const formData = { email: demoUser.email, password:'123456' };

	await loginWithEmailPassword.mockResolvedValue( loginData );
	await startLoginWithEmailPassword(formData)( dispatch );

	expect( dispatch ).toHaveBeenCalledWith( checkingCredentials() );
	expect( dispatch ).toHaveBeenCalledWith( logout(loginData) );
  })

  it('startLogout debe llamar logoutFirebase, clearNotes y logout', async() => {

	await startLogout()( dispatch );

	expect( logoutFirebase ).toHaveBeenCalled();
	expect( dispatch ).toHaveBeenCalledWith( clearNotesLogout() );
	expect( dispatch ).toHaveBeenCalledWith( logout() );
  	
  })













})
