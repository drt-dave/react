import {collection, deleteDoc, getDocs} from "firebase/firestore/lite";
import {addNewEmptyNote, savingNewNote, setActiveNote} from "../../../src/store/journal/journalSlice";
import {startNewNote} from "../../../src/store/journal/thunks";
import {FirebaseDB} from "../../../src/firebase/config";

describe('Pruebas en Journal Thunks', () => {


  const dispatch = jest.fn();
  const getState = jest.fn();

  beforeEach( () => jest.clearAllMocks() );

  it('startNewNote debe crear una nueva nota en blanco ', async() => {

	const uid = 'TEST-UID';
	getState.mockReturnValue({ auth: { uid: uid } });

	await startNewNote()( dispatch, getState );

	expect( dispatch ).toHaveBeenCalledWith( savingNewNote() );
	expect( dispatch ).toHaveBeenCalledWith( addNewEmptyNote({
	  body: "",
	  date: expect.any( Number ),
	  id: expect.any( String ),
	  imageUrls: expect.any( Array ),
	  title: "",
	}));
	expect( dispatch ).toHaveBeenCalledWith( setActiveNote({
	  body: "",
	  date: expect.any( Number ),
	  id: expect.any( String ),
	  imageUrls: expect.any( Array ),
	  title: "",
	}));
	// Borrar de firebase
	const collectionRef = collection(FirebaseDB, `${ uid }/journal/notes`)
	const docs = await getDocs( collectionRef );

	const deletePromises = [];
	docs.forEach( doc => deletePromises.push( deleteDoc( doc.ref ) ) );
	await Promise.all( deletePromises );

  });



})
