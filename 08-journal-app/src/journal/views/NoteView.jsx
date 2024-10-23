import {SaveOutlined, DeleteOutline, UploadOutlined, } from "@mui/icons-material";
import {Button, Grid, IconButton, TextField, Typography, } from "@mui/material";
import {ImageGallery} from "../components/ImageGallery";
import {useForm} from "../../hooks/useForm";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useMemo, useRef} from "react";
import {setActiveNote} from "../../store/journal/journalSlice";
import {startDeletingNote, startSaveNote, startUploadingFiles} from "../../store/journal/thunks";
import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.css';

export const NoteView = () => {

  const dispatch = useDispatch();
  const { active:note, messageSaved, isSaving } = useSelector( state => state.journal );
  const { body, title, date,  onInputChange, formState  } = useForm( note );

  const dateString = useMemo(() => { 
	const newDate = new Date(date);
	return newDate.toUTCString();
  } , [date])

  const fileInputRef = useRef(); 

  useEffect(() => {
	dispatch( setActiveNote(formState) )
  }, [formState])

  useEffect(() => {
	if (messageSaved.length > 0) {
	  Swal.fire('Nota actualizada', messageSaved, 'success');
	}
  }, [messageSaved])

  const onSaveNote = () => { 
	dispatch(startSaveNote());
  } 

  const  onFileInputChange = ({ target }) => { 
	if( target.files === 0 ) return;

	dispatch( startUploadingFiles( target.files ) );
  } 

  const onDelete = () => { 
	dispatch( startDeletingNote() );
  } 

  return (
	<Grid container direction='row' justifyContent='space-between' alignItems='center' sx={{ mb:1 }}>
	  <Grid item>
		<Typography fontSize={ 39 } fontWeight='light'>{ dateString }</Typography>
	  </Grid>
	  <Grid item>
		<input 
		  type="file" 
		  multiple
		  ref={ fileInputRef }
		  onChange={ onFileInputChange }
		  style={{ display: 'none' }}
		/>
		<IconButton
		  color="primary"
		  disabled={ isSaving }
		  onClick={ () => fileInputRef.current.click()  }
		>
		  <UploadOutlined/>
		</IconButton>
		<Button 
		  disabled={ isSaving || !title.trim() }
		  color="primary" 
		  sx={{ padding: 2 }}
		  onClick={onSaveNote}
		>
		  <SaveOutlined sx={{ fontSize:30, mr:1 }} />
		  Guardar
		</Button>
	  </Grid>
	  <Grid container>
		<TextField
		  type="text"
		  variant="filled"
		  fullWidth
		  placeholder="Ingrese un título"
		  label="Título"
		  sx={{ border: 'none', mb: 1 }}
		  name="title"
		  value= { title }
		  onChange={ onInputChange }
		/>
		<TextField
		  type="text"
		  variant="filled"
		  fullWidth
		  placeholder="Qué sucedió el día de hoy?"
		  minRows={ 5 }
		  name="body"
		  value= { body }
		  onChange={ onInputChange }
		/>
	  </Grid>

	  <Grid container justifyContent='end'>
		<Button
		  onClick={ onDelete }
		  sx={{ mt:2 }}
		  color="error"
		>
		  <DeleteOutline/>
		  Borrar
		</Button>
	  </Grid>
	  <ImageGallery images={ note.imageUrls } />	
	</Grid>
  )
}

/*
Explanation:

1. **useDispatch and useSelector**:
   - `useDispatch`: This hook is used to dispatch actions to the Redux store. In this case, actions like saving a note, deleting a note, or uploading files are triggered by dispatching the respective thunk actions.
   - `useSelector`: This hook is used to extract data from the Redux store's state. Here, we get the `active` note, whether a note is being saved (`isSaving`), and a `messageSaved` that shows when the note is updated.

2. **useEffect**:
   - The first `useEffect` listens for changes in the `formState` (coming from `useForm`) and dispatches the `setActiveNote` action to update the current active note in the Redux store.
   - The second `useEffect` shows a success alert using `Swal.fire` whenever the `messageSaved` changes, indicating that the note was successfully updated.

3. **useMemo**:
   - The `useMemo` hook is used to format the note's `date` into a UTC string. It only recalculates the date string when the `date` value changes, improving performance by avoiding unnecessary recalculations.

4. **Rendering the UI**:
   - **File input**: The file input is hidden by default and only triggered when clicking the "upload" button. This is achieved by using the `fileInputRef` to reference the input field and programmatically opening it on button click.
   - **Save and Delete buttons**: The "Save" button is disabled if the note is currently being saved (`isSaving` is true) or if the `title` is empty (checked using `!title.trim()`). The "Delete" button triggers the deletion of the current note.
   - **Text fields**: These are controlled inputs for the note's `title` and `body`. The input values are bound to the form state managed by `useForm`, and the `onInputChange` function updates the state when the user types.
   - **Image Gallery**: Displays any images associated with the current note using the `ImageGallery` component.

By combining these hooks and UI elements, this component manages the state of a note (with title, body, and images), saves the note, uploads images, and allows for deletion, all while updating the Redux store and showing success alerts when needed.
*/
