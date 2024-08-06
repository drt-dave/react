import {render, screen } from "@testing-library/react"
import {AuthContext} from "../../src/auth"
import {PublicRoute} from "../../src/router/PublicRoute"
import {MemoryRouter, Routes, Route} from "react-router-dom";

describe('Tests for <PublicRoute/>', () => {
  it('Should display the children if not authenticated', () => {

	// Context value indicating the user is not logged in
	const contextValue = {
	  logged: false
	}

	// Render the PublicRoute component with the AuthContext provider
	render(
	  <AuthContext.Provider value={ contextValue } >
		<PublicRoute>
		  <h1>Ruta pública</h1>
		</PublicRoute>
	  </AuthContext.Provider>
	);

	// Check that the text "Public Route" is present in the document
	expect( screen.getByText('Ruta pública') ).toBeTruthy()
  });

  it('Should navigate if authenticated', () => {

	// Context value indicating the user is logged in
	const contextValue = {
	  logged: true,
	  user: {
		name: 'Strider',
		id: 'ABC123'
	  }
	}

	// Render the PublicRoute component within a MemoryRouter
	// MemoryRouter is used for routing in tests
	render(
	  <AuthContext.Provider value={ contextValue } >
		<MemoryRouter initialEntries={['/login']}>
		  <Routes>
			<Route path='login' element={
			  <PublicRoute>
				<h1>Ruta pública</h1>
				</PublicRoute>
			  }/>
			<Route path="marvel" element={<h1>Página Marvel</h1>}/>
		  </Routes>
		</MemoryRouter>
	  </AuthContext.Provider>
	);

	// Debug the current state of the rendered component
	// screen.debug();
	// Check that the text "MarvelPage" is present in the document
	expect( screen.getByText('Página Marvel') ).toBeTruthy();
  })

})












