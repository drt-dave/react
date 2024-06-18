import { act, renderHook } from "@testing-library/react";
import { useForm } from "../../src/hooks";

/**
 * Tests for the useForm hook
 */
describe('Tests for useForm', () => {

    const initialForm = {
        name: 'Fernando',
        email: 'fernando@google.com'
    };

    /**
     * Should return default values
     * 
     * @param {object} initialForm - The initial state of the form.
     * @observation Checks that the hook correctly returns the initial values.
     *              The initial values should be those provided in `initialForm`.
     *              The functions onInputChange and onResetForm should be defined.
     */
    test('Should return default values', () => {
        const { result } = renderHook(() => useForm(initialForm));

        expect(result.current).toEqual({
            name: initialForm.name, // Check that the initial value of the 'name' field is 'Fernando'
            email: initialForm.email, // Check that the initial value of the 'email' field is 'fernando@google.com'
            formState: initialForm, // Check that the initial form state is the provided one
            onInputChange: expect.any(Function), // Check that onInputChange is a function
            onResetForm: expect.any(Function), // Check that onResetForm is a function
        });
    });

    /**
     * Should change the form name
     * 
     * @param {object} initialForm - The initial state of the form.
     * @param {string} newValue - The new value for the 'name' field.
     * @observation Tests that the onInputChange function correctly changes the value of the 'name' field.
     *              The 'name' field should update to the provided new value.
     */
    test('Should change the form name', () => {
        const newValue = 'Juan';
        const { result } = renderHook(() => useForm(initialForm));
        const { onInputChange } = result.current;

        act(() => {
            onInputChange({ target: { name: 'name', value: newValue } }); // Simulate the change in the 'name' field
        });

        expect(result.current.name).toBe(newValue); // Check that the value of the 'name' field is 'Juan'
        expect(result.current.formState.name).toBe(newValue); // Check that the form state has been updated
    });

    /**
     * Should reset the form
     * 
     * @param {object} initialForm - The initial state of the form.
     * @param {string} newValue - The new value for the 'name' field.
     * @observation Checks that the onResetForm function resets the form to the initial value.
     *              After changing the value of the 'name' field, it should reset to the initial value.
     */
    test('Should reset the form', () => {
        const newValue = 'Juan';
        const { result } = renderHook(() => useForm(initialForm));
        const { onInputChange, onResetForm } = result.current;

        act(() => {
            onInputChange({ target: { name: 'name', value: newValue } }); // Simulate the change in the 'name' field
            onResetForm(); // Reset the form to the initial value
        });

        expect(result.current.name).toBe(initialForm.name); // Check that the value of the 'name' field is 'Fernando'
        expect(result.current.formState.name).toBe(initialForm.name); // Check that the form state is the initial one
    });
});

