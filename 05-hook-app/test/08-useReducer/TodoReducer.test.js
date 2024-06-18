import { TodoReducer } from "../../src/08-useReducer/TodoReducer";

describe('Test in TodoReducer', () => {

    // Initial state of the test
    const initialState = [{
        id: 1,
        description: 'Demo Todo',
        done: false,
    }]

    // Test to verify that the reducer returns the initial state when no action is provided
    test('Should return the initial state', () => {
        const newState = TodoReducer(initialState, {});
        expect(newState).toBe(initialState);
    });

    // Test to verify that a new todo item is added correctly
    test('Should add a todo', () => {

        // Action to add a new todo
        const action = {
            type: '[TODO] Add Todo',
            payload: {
                id: 2,
                description: 'Nuevo todo #2',
                done: false,
            }
        };

        // Call the reducer with the action
        const newState = TodoReducer(initialState, action);
        expect(newState.length).toBe(2);
        expect(newState).toContain(action.payload);
    });


    // Test to verify that a todo item is deleted correctly
    test('Should delete a Todo', () => {

        // Action to remove a todo
        const action = {
            type: '[TODO] Remove Todo',
            payload: 1
        };

        // Call the reducer with the action
        const newState = TodoReducer(initialState, action);
        // Verify that the new state has zero items
        expect( newState.length).toBe( 0 );

    });

    // Test to verify that the 'done' status of a todo item is toggled correctly
    test('Should toggle the Todo', () => {

        // Action to toggle a todo's 'done' status
        const action = {
            type: '[TODO] Toggle Todo',
            payload: 1
        };

        // Call the reducer with the action
        const newState = TodoReducer(initialState, action);
        // Verify that the 'done' status of the todo item has been toggled
        expect( newState[0].done).toBe(true)

    });

});
