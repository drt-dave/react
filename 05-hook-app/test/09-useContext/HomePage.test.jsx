import {render, screen}  from "@testing-library/react";
import {HomePage}  from "../../src/09-useContext/HomePage";
import {UserContext} from "../../src/09-useContext/context/UserContext";

// Test suite for the HomePage component
describe('Test on <HomePage/>', () => {


  // Sample user data
  const user = {
	id: 33,
	name: 'RaAmón',
  }

  // Test to verify rendering of the component without a user
  it('should render the component without the user ', () => {

	// Rendering the HomePage component with a null user context
	render(
	  <UserContext.Provider value ={{ user: null }}>
		<HomePage />
	  </UserContext.Provider>
	);
	// Retrieving the pre element using aria-label
	const preTag = screen.getByLabelText('pre');
	// Expecting the innerHTML of the pre element to be 'null'
	expect( preTag.innerHTML ).toBe('null');
	// Uncomment the line below to output debug information about the rendered component 
	// screen.debug()
  });

  // Test to verify rendering of the component with a user context
  it('should render the component with the user', () => {

	// Rendering the HomePage component with a user context
	render(
	  <UserContext.Provider value={{ user }}>
		<HomePage />
	  </UserContext.Provider>
	);
	// Retrieving pre element using aria-label
	const preTag = screen.getByLabelText('pre');
	// Expecting the innerHTML of the pre element to containt the user's name and id
	expect(preTag.innerHTML).toContain(`${user.name}`);
	expect(preTag.innerHTML).toContain(`${user.id}`);

	// screen.debug();

  });
});









