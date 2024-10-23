import {fireEvent, render} from "@testing-library/react"
import {LoginPage} from "../../../../src/auth/pages/LoginPage"
import {Provider, useDispatch} from "react-redux"
import {configureStore} from "@reduxjs/toolkit"
import {authSlice, startGoogleSignIn, startLoginWithEmailPassword} from "../../../../src/store/auth"
import {MemoryRouter} from "react-router-dom"
import { screen } from "@testing-library/react"
import {notAuthenticatedState} from "../../../fixtures/authFixtures"

const mockStartGoogleSigIn = jest.fn();
const mockStartLoginWithEmailPassword = jest.fn();

jest.mock('../../../../src/store/auth/thunks', () => ({
  startGoogleSignIn: () => mockStartGoogleSigIn,
  startLoginWithEmailPassword: ({ email, password }) => { 
	return () => mockStartLoginWithEmailPassword({ email, password }); 
  },
}));

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => (fn) => fn(),
}));


const store = configureStore({
  reducer: {
	auth: authSlice.reducer
  },
  preloadedState: {
	auth: notAuthenticatedState
  }
})

describe('Pruebas en <LoginPage/>  ', () => {

  beforeEach(() => jest.clearAllMocks());

  it('Debe mostrar el componente correctamente ', () => {
	render(
	  <Provider store={ store }>
		<MemoryRouter>
		  <LoginPage/>
		</MemoryRouter>
	  </Provider>
	)
	expect( screen.getAllByText('Login').length ).toBeGreaterThanOrEqual(1);
  });

  it('Boton de google debe llamar el startGoogleSignIn', () => {
	render(
	  <Provider store={ store }>
		<MemoryRouter>
		  <LoginPage/>
		</MemoryRouter>
	  </Provider>
	);

	const googleBtn = screen.getByLabelText('google-btn');
	fireEvent.click( googleBtn );
	expect( mockStartGoogleSigIn ).toHaveBeenCalled();
  });

  it('submit debe llamar startLoginWithEmailPassword', () => {

	const email = 'ramon@google.com';
	const password = '123456';

	render(
	  <Provider store={ store }>
		<MemoryRouter>
		  <LoginPage/>
		</MemoryRouter>
	  </Provider>
	);

	const emailField = screen.getByRole('textbox', { name: 'Correo' });
	fireEvent.change( emailField, { target: { name: 'email', value: email } } );

	const passwordField = screen.getByTestId('password');
	fireEvent.change( passwordField, { target: { password: 'email', value: password } } );

	const loginForm = screen.getByLabelText('submit-form');
	fireEvent.submit( loginForm );

	expect( mockStartLoginWithEmailPassword ).toHaveBeenCalledWith({
	  email: email,
	  password: password,
	})


  })












})

