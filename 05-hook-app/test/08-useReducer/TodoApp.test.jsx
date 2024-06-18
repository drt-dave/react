import {screen, render} from "@testing-library/react";
import {TodoApp} from "../../src/08-useReducer";
import {useTodo} from "../../src/hooks";

// Mocking the useTodo hook to simulate its behavior
jest.mock('../../src/hooks/useTodo');

describe('Test on <TodoApp />', () => {

  // Sets the simulated return values for the useTodo hook
  useTodo.mockReturnValue({
	todos: [
	  { id:1, description: 'Todo #1', done: false },
	  { id:2, description: 'Todo #2', done: true },

	], todosCount: 2,
	pendingTodosCount: 1,
	handleDeleteTodo: jest.fn(),
	handleToggleTodo: jest.fn(),
	handleNewTodo: jest.fn()
  });


  // Test to verify if the component renders correctly
  it('should mostrar el componente correctamente ', () => {

	// Renders the TodoApp component
	render(<TodoApp />);
	// screen.debug()

	// Verifies the presence of expected elements in the rendered component
	expect( screen.getByText('Todo #1') ).toBeTruthy();
	expect( screen.getByText('Todo #2') ).toBeTruthy();
	expect( screen.getByRole('textbox') ).toBeTruthy();
  })
})
