import { createSlice } from '@reduxjs/toolkit';
//------------------------------------------------
//código anterior a la conexión con backend,ejemplo de evento
// import {addHours} from 'date-fns';

// // const tempEvent = {
// //   _id: new Date().getTime(),
// //   title: 'Título desde calendarSlice',
// //   notes: 'Hay que comprar el pastel',
// //   start: new Date(),
// //   end: addHours(new Date(), 2),
// //   bgColor: '#fafafa',
// //   user: {
// // 	_id: '123',
// // 	name: 'RaAmón'
//   }
// }
// ---------------------------------------------

export const calendarSlice = createSlice({
  name: 'calendarSlice',
  initialState: {
	isLoadingEvents: true,
	events: [
	  // tempEvent
	],
	activeEvent: null
  },
  reducers: {
	onSetActiveEvent: (state, { payload }  ) => {
	  state.activeEvent = payload
	},
	onAddNewEvent: ( state, { payload } ) => {
	  state.events.push( payload ) // push gracias al toolkit
	  state.activeEvent = null // limpio el evento activo
	},
	onUpdateEvent: ( state, { payload } ) => {
	  state.events = state.events.map( event => {
		if ( event._id === payload._id ){
		  return payload;
		}

		return event;
	  } )
	},
	onDeleteEvent: ( state ) => {
	  if (state.activeEvent) {
		state.events = state.events.filter( event => event._id !== state.activeEvent._id );
		state.activeEvent = null;
	  }
	},
	onLoadEvents: (state, { payload = [] }) => {
	  state.isLoadingEvents = false;
	  // Adds new events from the payload to the state if they don't already exist based on their ID
	  payload.forEach( event => {
		const exists = state.events.some( dbEvent => dbEvent.id === event.id );
		if ( !exists ) {
		  state.events.push( event )
		}

	  });
	},
	onLogoutCalendar: ( state ) => {
	  state.isLoadingEvents = true,
	  state.events = []
	  state.activeEvent = null
	} 

  }
});

// Action creators are generated for each case reducer function
export const { 
  onAddNewEvent, 
  onDeleteEvent, 
  onLoadEvents ,
  onLogoutCalendar,
  onSetActiveEvent, 
  onUpdateEvent, 
} = calendarSlice.actions;
