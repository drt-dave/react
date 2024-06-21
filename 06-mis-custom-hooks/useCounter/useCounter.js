// Import the useState hook from react
import { useState } from 'react';

// Define the useCounter hook
export const useCounter = ( inititalValue = 1  ) => {
  // Initialize the counter state with the provided initial value or 1 by deafa
  const [counter, setCounter] = useState( inititalValue );

  // Function to increment the counter by a specified value

  // Function1* See end of the document
  // const increment = ( value = 1 ) => { 
	// setCounter( counter + value );
  // } 

  // Function2* See end of the document
  const increment = ( value =1 ) => {
	setCounter(( current ) => current + value )
  } 

  // Function to decrement the counter by a specified value 
  const decrement = ( value = 1 ) => { 
	// Check if the counter is zero to avoid negative values
	if ( counter === 0  ) return; // Do nothing if the counter is already at zero
	// Decrement the counter by substracting the provided value
	// setCounter( counter - value );
	setCounter( ( current ) => current - value  ); // Optimized for testing
  } 

  // Function to reset the counter to the initial value
  const reset = () => { 
	// Set the counter to the provided initial value
	setCounter( inititalValue );
  } 

  return {
	// Return the counter state and the increment, decrement, and reset functions
	counter, //Current counter state
	increment, // Function to increment the counter
	decrement, // Function to decrement the counter
	reset, //Function to reset the counter
  };
}

//                         NOTES
// Key Differences: Function 1 and Function2 (Optimized Function1 for testing)
//
// Synchronous vs. Asynchronous Updates: Function1 may fail with Asynchronous updates, while Function2 correctly handles concurrent updates.
//
// State Consistency: FUnction2 ensures the most recent counter state is used, while Function1 may use an outdated value if the state changes between calls to setCounter.









