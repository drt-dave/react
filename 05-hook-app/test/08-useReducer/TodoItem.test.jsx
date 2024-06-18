import {fireEvent, render, screen} from "@testing-library/react"; // Import necessary functions and components for testing
import { TodoItem } from "../../src/08-useReducer/TodoItem"; // Import the TodoItem component to test

describe('Test in <TodoItem/>', () => {

  // Definition of a todo object to use in tests
  const todo = {
	id:1,
	description: 'Piedra del alma',
	done: false,
  };

  // Mock functions to simulate events
  const onDeleteTodoMock = jest.fn();
  const onToggleTodoMock = jest.fn();

  // Reset mocks before each test
  beforeEach(() => jest.clearAllMocks() );

  // Test to verify the rendering of an incomplete todo

  it('should display the todo pending to complete ', () => {
	render(
	  // Render the TodoItem component with the pending todo
	  <TodoItem
		todo={todo}
		onToggleTodo={ onToggleTodoMock }
		onDeleteTodo={ onDeleteTodoMock }
	  />
	);

	// Get the todo's li element and verify its classes
	const liElement = screen.getByRole('listitem');
	expect(liElement.className).toBe('list-group-item d-flex justify-content-between');

	// Get the todo's span element and verify its clases
	const spanElement =  screen.getByLabelText('span');
	expect( spanElement.className ).toContain('align-self-center');
	expect( spanElement.className ).not.toContain('text-decoration-line-through');
	// screen.debug();
  });

  // Test to verify the rendering of a completed todo
  it('should display the completed todo', () => {

	// Mark the todo as completed
	todo.done = true;

	// Render the TodoItem component with the completed todo
	render(
	  <TodoItem
		todo={todo}
		onToggleTodo={ onToggleTodoMock }
		onDeleteTodo={ onDeleteTodoMock }
	  />
	);

	// Get the todo's li element and verify its clases
	const liElement = screen.getByRole('listitem');
	expect( liElement.className ).toBe("list-group-item d-flex justify-content-between");
	// screen.debug();
  });

  // Test to verify that onToggleTodo is called when clicking on the todo's span
  it('should toggle todo when clicked', () => {

	// Render the TodoItem component
	render(
	  <TodoItem
		todo={todo}
		onToggleTodo={ onToggleTodoMock }
		onDeleteTodo={ onDeleteTodoMock }
	  />
	);

	// Get the todo's span element and simulate a click on it.
	const spanElement = screen.getByLabelText('span');
	fireEvent.click( spanElement );

	// Verify that onToggleTodo function has been called with the todo's id
	expect( onToggleTodoMock ).toHaveBeenCalledWith(todo.id);
  });

  // Test to verify that onDeleteTodo function is called when clicking on the todo's delete button
  it('Button should call deleteTodo ', () => {
  	
	render(
	  <TodoItem
		todo={todo}
		onToggleTodo={ onToggleTodoMock }
		onDeleteTodo={ onDeleteTodoMock }
	  />
	);

	// Get the todo's delete button and simulate a click on it
	const deleteButton = screen.getByRole('button');
	fireEvent.click(deleteButton);

	// verify that the onDeleteTodo function was called with the todo's id
	expect( onDeleteTodoMock ).toHaveBeenCalledWith(todo.id);
  })





























  
});
