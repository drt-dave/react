// This component handles the user interface for registration.

import {useMemo, useState} from 'react';
// Uses React Redux to manage global state and dispatch actions.
import {useDispatch, useSelector} from 'react-redux';
import {Link as RouterLink } from 'react-router-dom';
// Employs Material-UI for interface components.
import {Button, Alert, Grid, Typography, TextField, Link} from "@mui/material";

import {AuthLayout} from '../layout/AuthLayout';
// Uses a custom useForm hook to manage form state and validation
import {useForm} from '../../hooks';
import {startCreatingUserWithEmailPassword} from '../../store/auth';

const formData = {
  email: '',
  password: '',
  displayName: ''
}

const formValidations = {
  email: [ (value) => value.includes('@'), 'El correo debe tener una @.' ],
  password: [ (value) => value.length >= 6, 'El password debe tener mas de 6 letras.' ],
  displayName: [ (value) => value.length >= 1, 'El nombre es obligatorio.' ],
}

export const RegisterPage = () => {

  const dispatch = useDispatch()
  const [formSubmitted, setFormSubmitted] = useState(false);

  const { status, errorMessage  } = useSelector( state => state.auth );
  const isCheckingAuthentication = useMemo(() => status === 'checking' , [status]);

  const { 
	displayName,
	email,
	password, 
	onInputChange, 
	formState,
	isFormValid,
	displayNameValid,
	emailValid,
	passwordValid} = useForm( formData, formValidations );

  const onSubmit = ( event ) => { 
	// Prevents default form behavior
	event.preventDefault();
	// Marks the form as submitted
	setFormSubmitted(true);
	// If the form is valid, dispatches the startCreatingUserWithEmailPassword action.
	if ( !isFormValid ) return;
	dispatch( startCreatingUserWithEmailPassword(formState) );
  } 

  return (
	<AuthLayout title='Crear cuenta'>
	  <form onSubmit={ onSubmit } className='animate__animated animate__fadeIn animate__faster'
	  >

		<Grid container>

		  <Grid item xs={ 12 } sx={{ mt: 2 }}>
			<TextField
			  label="Nombre completo"
			  type="text"
			  placeholder="Tu nombre"
			  fullWidth
			  name="displayName"
			  value={ displayName }
			  onChange={ onInputChange }
			  error={ !!displayNameValid && formSubmitted }
			  herlpertext = { displayNameValid }
			/>
		  </Grid>

		  <Grid item xs={ 12 } sx={{ mt: 2 }}>
			<TextField
			  label="correo"
			  type="email"
			  placeholder="correo@google.com"
			  fullWidth
			  name="email"
			  value={ email }
			  onChange={ onInputChange }
			  error={ !!emailValid && formSubmitted}
			  herlpertext = { emailValid }
			/>
		  </Grid>

		  <Grid item xs={ 12 } sx={{ mt: 2 }}>
			<TextField
			  label="Contraseña"
			  type="password"
			  placeholder="Contraseña"
			  fullWidth
			  name="password"
			  value={ password }
			  onChange={ onInputChange }
			  error={ !!passwordValid && formSubmitted}
			  herlpertext = { passwordValid }
			/>
		  </Grid>


		  <Grid container spacing={ 2 } sx={{ mb: 2, mt:1 }}>
			<Grid 
			  item 
			  xs={ 12 }
			  display={ !!errorMessage ? '' : 'none'}
			>
			  <Alert severity='error' >{ errorMessage }</Alert>
			</Grid>
			<Grid item xs={ 12 }>
			  <Button 
				disabled={ isCheckingAuthentication }
				type="onSubmit"
				variant='contained' 
				fullWidth>
				Crear cuenta
			  </Button>
			</Grid>
		  </Grid>

		  <Grid container direction='row' justifyContent='end'>
			<Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
			<Link component={ RouterLink  } color='inherit' to="/auth/login">
			  ingresar
			</Link>

		  </Grid>

		</Grid>
	  </form>
	</AuthLayout>
  )
}


