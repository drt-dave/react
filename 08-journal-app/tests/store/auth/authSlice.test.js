import {authSlice, checkingCredentials, login, logout} from "../../../src/store/auth/authSlice"
import {authenticatedState, demoUser, initialState} from "../../fixtures/authFixtures";

describe('Pruebas en el authSlice', () => {

  it('Debe regresar el estado inicial y llamarse "auth" ', () => {
	expect( authSlice.name ).toBe('auth');
	const state = authSlice.reducer( initialState, {} );
	expect( state ).toEqual( initialState );
  });

  it('Debe realizar la autenticación ', () => {
	// console.log( login( demoUser ) );
	const state = authSlice.reducer( initialState, login( demoUser ) );
	expect( state ).toEqual({
	  status: 'authenticated',
	  uid: demoUser.uid,
	  email: demoUser.email,
	  displayName: demoUser.displayName,
	  photoURL: demoUser.photoURL, 
	  errorMessage: null,
	});
  });

  it('Debe realizar el logout sin argumentos ', () => {
	// authenticatedState // logout sin argumentos
	const state = authSlice.reducer( authenticatedState, ( logout() ) );
	// console.log(state);
	expect(state ).toEqual({
	  status: 'not-authenticated',
	  uid: null,
	  email: null,
	  displayName: null,
	  photoURL: null, 
	  errorMessage: undefined,
	});
  });

  it('Debe realizar el logout sin argumentos ', () => {
	// authenticatedState // logout con argumentos
	const errorMessage = 'Credenciales no son correctas';
	const state = authSlice.reducer( authenticatedState, ( logout({errorMessage}) ))
	expect(state ).toEqual({
	  status: 'not-authenticated',
	  uid: null,
	  email: null,
	  displayName: null,
	  photoURL: null, 
	  errorMessage: errorMessage,
	});
  });

  it('Debe cambiar el estado a checking ', () => {
	const state = authSlice.reducer( authenticatedState, checkingCredentials() );
	// console.log(state.status)
	expect(state.status).toBe('checking');
  });

});




