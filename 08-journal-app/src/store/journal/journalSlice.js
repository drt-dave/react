
import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
  name: 'journal',
  initialState: {
	isSaving: false,
	messageSaved:'',
	notes: [],
	active: null,
	// active: {
	//   id: 'ABC123',
	//   title: '',
	//   body: '',
	//   date: 1234567,
	//   imageUrls: [], //https://foto1.jpg, https://foto2.jpg, https://foto3.jpg
	// }

  },
  //Reducers funciones NO SINCRONAS, si requiere una acción sincrónica crear thunk
  reducers: {
	savingNewNote: (state) => { 
	  state.isSaving = true;

	}, 
	//Agregar nueva nota (al store)
	addNewEmptyNote: ( state, action ) => { 
	  state.notes.push( action.payload );
	  state.isSaving = false;

	},
	// Establece nota como activa	
	setActiveNote: ( state, action ) => { 
	  state.active = action.payload;
	  state.messageSaved = '';

	},
	//Establece las notas
	setNotes: ( state, action ) => { 
	  state.notes = action.payload;


	},
	//Grabando las notas
	setSaving: ( state  ) => { 
	  state.isSaving = true;
	  state.messageSaved = '';

	},
	//Actualizar una nota
	updateNote: ( state, action ) => { 
	  state.isSaving = false;
	  state.notes = state.notes.map(note => {

		if ( note.id === action.payload.id ) {
		  return action.payload;
		}

		return note;
	  });

	  state.messageSaved = `${ action.payload.title }, actualizada correctamente`;

	},

	setPhotosToActiveNote: ( state, action ) => { 
	  state.active.imageUrls = [ ...state.active.imageUrls, ...action.payload ];
	  state.isSaving = false;
	}, 

	clearNotesLogout : ( state ) => { 
	  state.isSaving = false;
	  state.messageSaved = '';
	  state.notes = [];
	  state.active = null;
	}, 
	//Eliminar nota por id
	deleteNoteById: (state, action) => { 
	  state.active = null;
	  state.notes = state.notes.filter(note => note.id != action.payload);
	},

  },
}
);

// Action creators are generated for each case reducer function
export const {
  addNewEmptyNote, 
  clearNotesLogout,
  deleteNoteById, 
  savingNewNote, 
  setActiveNote, 
  setNotes, 
  setPhotosToActiveNote,
  setSaving, 
  updateNote 
} = journalSlice.actions;
