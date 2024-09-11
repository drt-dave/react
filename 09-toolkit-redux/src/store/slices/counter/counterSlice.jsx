import { createSlice } from "@reduxjs/toolkit"

const initialCount = 10

export const counterSlice = createSlice({
  name:'counter',
  initialState:{
	counter: initialCount
  },
  reducers:{
	  // Redux Tookkit allows us to write "mutating" logic in reducers. it
	  // doesn't actually mutate the state because it uses the Immer library,
	  // wich detects changes to a "draft state" and produces a brand new
	  // immutable state based off those changes
	increment: ( state ) => { 
	  state.counter += 1;
	}, 
	incrementBy: ( state, action ) => { 
	  state.counter += action.payload;
	}, 
	decrement: ( state ) => {
	  state.counter -= 1;
	},
	restart: ( state ) => { 
	  state.counter= initialCount;
	},
  },
})

// Action creators are generated for each case reducer function 
export const { increment, decrement, restart, incrementBy} = counterSlice.actions;

