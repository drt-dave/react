import { fireEvent, render, screen } from "@testing-library/react";
import { LoginPage } from "../../src/09-useContext/LoginPage"; 
import { UserContext } from "../../src/09-useContext/context/UserContext";


describe('Tests on <LoginPage />', () => {


  const user = {
	id: 33,
	name: 'RaAmón',
  }

  it('should render the component ', () => {

	render(
	  <UserContext.Provider value={{user:null}}>
		<LoginPage />
	  </UserContext.Provider>
	);
	const preTag = screen.getByLabelText('pre');
	expect(preTag.innerHTML).toBe('null');
	// screen.debug();
  });

  it('should llamar setUser cuando se hace click en el botón', () => {

	const mockSetUser = jest.fn();

	render(
	  <UserContext.Provider value={{ user: user, setUser: mockSetUser }}>
		<LoginPage />
	  </UserContext.Provider>
	);

	const button = screen.getByRole('button')

	fireEvent.click(button);

	expect( mockSetUser ).toHaveBeenCalledWith({"email": "Juan@google.com", "id": 123, "name": "Juan" });

  });
})
