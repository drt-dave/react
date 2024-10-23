// Import necessary Firestore functions and Firebase configuration
import {collection, deleteDoc, doc, setDoc} from "firebase/firestore/lite"; 
import {FirebaseDB} from "../../firebase/config";  // Firebase configuration setup
import {addNewEmptyNote, deleteNoteById, savingNewNote, setActiveNote, setNotes, setPhotosToActiveNote, setSaving, updateNote} from "./journalSlice";   // Redux slice action to add a new note to the state
import {fileUpload, loadNotes} from "../../helpers";

// Thunk function to start creating a new note
export const startNewNote = () => { 
  return async (dispatch, getState) => {
	// getState() allows us to access the current Redux state, 
	// in this case, we access 'auth' to get the user's UID (unique identifier)

	dispatch(savingNewNote());
	const { uid } = getState().auth;  // Destructuring to extract the UID of the logged-in user

	// Creating a new empty note object with default values (title, body)
	// We also include the current timestamp in 'newDate'
	const newNote = {
	  title: '',
	  body: '',
	  imageUrls: [],
	  date: new Date().getTime(),  // Stores the current time in milliseconds
	};

	// Create a reference to a new document in Firestore using the user's UID
	// The path looks like: `${uid}/journal/notes` where notes will be stored per user
	const newDoc = doc(collection(FirebaseDB, `${ uid }/journal/notes`)); 

	// Save the new note in Firestore using setDoc()
	// This is an asynchronous operation, so we await its completion
	await setDoc(newDoc, newNote);  

	// After saving the note, Firestore generates a unique document ID for it.
	// We assign this ID to the note object
	newNote.id = newDoc.id;

	//!dispatch (sending the action to the journalSlice)

	// Dispatching an action to add the newly created note (with its generated ID)
	// TO THE REDUX STORE, so the UI can update with this new note
	dispatch(addNewEmptyNote(newNote));

	dispatch( setActiveNote(newNote) )
  }
};

export const startLoadingNotes = () => { 
  return async( dispatch, getState ) => {

	const { uid } = getState().auth;
	if (!uid) throw new Error('El UID del usuario no existe');

	const notes = await loadNotes(uid);
	dispatch( setNotes(notes)  )
  }
} 

export const startSaveNote = () => { 
  return async( dispatch, getState ) => {

	dispatch( setSaving() );

	const { uid } = getState().auth;
	const { active: note } = getState().journal;

	const noteToFireStore = { ...note };
	// Se elimina el id de la nota activa antes de guardarla pq sino se vuelve a crear otro id
	delete noteToFireStore.id;
	// Aquí se hacer referencia a la nota activa en la base de datos (note.id era el id que tenía originalmente)
	const docRef = doc( FirebaseDB,`${uid}/journal/notes/${ note.id }` )
	//Aquí se impacta y modifica la nota activa en la base de datos con el merge
	await setDoc( docRef, noteToFireStore, { merge: true } );

	dispatch( updateNote(note) );

  }
} 

export const startUploadingFiles = ( files = [] ) => { 
  return async( dispatch ) =>{
  dispatch( setSaving() );

	// await fileUpload(files[0]);

	const fileUploadPromises = [];
	for ( const file of files ) {
	  fileUploadPromises.push( fileUpload( file ) )
	}

	const photoUrls = await Promise.all(fileUploadPromises);

	dispatch( setPhotosToActiveNote( photoUrls ) );
  }
} 

export const startDeletingNote = () => { 
  return async(dispatch, getState) => {

	const { uid  } = getState().auth;
	const { active: note } = getState().journal;

	const docRef = doc( FirebaseDB, `${ uid }/journal/notes/${ note.id }` );
	await deleteDoc( docRef );
	

	dispatch( deleteNoteById(note.id) );

  }
} 	
