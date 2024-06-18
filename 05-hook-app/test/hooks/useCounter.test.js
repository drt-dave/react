import {act, renderHook} from "@testing-library/react";
import {useCounter} from "../../src/hooks/useCounter";
/**
 * Test suite for useCounter hook
 */
describe('Tests on useCounter', () => {
  /**
   * Should return default values 
   *
   * @observation This verifies tha the hook returns the correct default values.
   * The counter should start at 1, and the decrement, increment, and reset functions should be defined.
   */
  it('should return default values ', () => {
	// Render the useCounter hook 
	const { result } = renderHook(()=> useCounter()); 
	// Destructure the result to get counter and the functions
	const { counter, decrement, increment, reset  } = result.current;
	// Verify that the default conter value is 1
	expect( counter ).toBe(1); 
	// Verify that decrement, increment and reset are functions
	expect( decrement ).toEqual(expect.any(Function)); 
	expect( increment ).toEqual(expect.any(Function));
	expect( reset ).toEqual(expect.any(Function)); 
  });


  /**
   * Should generate the counter with the value 100. 
   *
   * @param { number } initiaValue - The initial value of the counter.
   * @observation Ensures that the counter initializes with the provided value.
   * 			  The counter should start at 100.
   */
  it('Should generate the counter with tha value 100', () => {
	// Render the useCounter hook.
	const { result } = renderHook( () => useCounter(100));
	// Verify that the initial counter is 100
	expect(result.current.counter).toBe(100); 
  });

  /**
   * Should increment the counter
   * 
   * @param { number  } initiaValue - The initial value of the counter.
   * @observation Tests that the increment function correctly increases the counter value.
   * 			  It increments once without parameters ( default value 1 ) and once with 2.
   * 			  The counter should increment from 100 to 101 and then to 103.
   */

  it('Should increment the counter ', () => {

	const { result } = renderHook( () => useCounter(100));
	const { increment } = result.current;

	act(() => { 
	  increment(); // Increment by 1
	  increment(2); // Increment by 2
	});

	expect(result.current.counter).toBe(103); // Verify that the current value is 103
  });

  /**
   * Should decrement the counter
   *
   * @param { number } inititalValue - The initial value of the counter.
   * @Observation Ensures that the decrement function correctly decreases the counter value.
   * 			  It decrements once without parameters ( dafault value 1 ) and once with 2.
   * 			  The counter should devrement from 100 to 99 an the to 97.
   */

  it('should decrement the counter', () => {
	const { result } = renderHook( () => useCounter(100)  );
	const { decrement } = result.current;

	act(() => { 
	  decrement(); // Decrement by 1
	  result.current.decrement(2); // Decrement by 2
	});

	expect( result.current.counter ).toBe(97); // Verify that the counter value is 97
  });

  /**
   * Should reset the counter
   *
   * @param { number } inititalValue - The initial value of the counter.
   * @observation Verifies that the reset function restores the counter value to the initial value.
   * 		      It decrements once to change the value and then resets it.
   * 		      The counter should change from 100 to 99 and then reset to 100.
   */

  it('should reset the counter', () => {
	const { result } = renderHook( () => useCounter(100)  );

	act( () => { 
	  result.current.decrement(); // Decrement by 1 to change the initial value
	  result.current.reset(); // Reset the counter value to the initial value
	});

	expect( result.current.counter ).toBe(100); // Verify that the counter value is 100
 	
  })


});





















