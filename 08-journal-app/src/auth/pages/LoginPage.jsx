import {useDispatch, useSelector} from 'react-redux'
import { Link as RouterLink } from 'react-router-dom'
import {Google} from "@mui/icons-material"
import {Button, Grid, Typography, TextField, Link, Alert} from "@mui/material"

import {AuthLayout} from '../layout/AuthLayout'

import {useForm} from '../../hooks/useForm'
import {startLoginWithEmailPassword, startGoogleSignIn} from '../../store/auth'
import {useMemo} from 'react'

const formData = {
	email: '',
	password: '',
  }
export const LoginPage = () => {


  const { status, errorMessage  } = useSelector( state => state.auth );
  const dispatch = useDispatch();

  const { email, password, onInputChange  } = useForm(formData);

  const isAuthenticating = useMemo( () => status === 'checking', [status] );

  const onSubmit =  ( event ) => { 
	event.preventDefault();

	// cambiar esta acción a despachar hay que crearla en los thunks
	dispatch(startLoginWithEmailPassword( {email, password} ));

  };

  const onGoogleSignIn = () => { 
	// console.log('(onGoogleSignIn)');
	dispatch( startGoogleSignIn());
  } 


  return (

	<AuthLayout title='Login'>
	  <form  aria-label='submit-form' onSubmit={ onSubmit }className='animate__animated animate__fadeIn animate__faster'
	  >
				<Grid container>
		  <Grid item xs={ 12 } sx={{ mt: 2 }}>
			<TextField
			  label="Correo"
			  type="email"
			  placeholder="correo@google.com"
			  fullWidth
			  name="email"//lo necesito para que onChange funcione
			  value={ email }
			  onChange={ onInputChange }
			/>
		  </Grid>

		  <Grid item xs={ 12 } sx={{ mt: 2 }}>
			<TextField
			  label="Contraseña"
			  type="password"
			  placeholder="Contraseña"
			  fullWidth
			  name="password"//lo necesito para que onChange funcione
			  inputProps={{
				'data-testid':'password'
			  }}
			  value={ password }// con estos 3 conecto el useForm al
			  onChange={ onInputChange }// al formulario
			/>
		  </Grid>

		</Grid>

		<Grid
		  container
		  display={ !!errorMessage ? '' : 'none'}
		  sx={{ mt: 1 }}
		>
		  <Grid 
			item 
			xs={ 12 }
		  >
			<Alert severity='error' >{ errorMessage }</Alert>
		  </Grid>
		</Grid>

		<Grid container spacing={ 2 } sx={{ mb: 2, mt:1 }}>

		  <Grid item xs={ 12 } sm={ 6 }>
			<Button 
			  disabled={ isAuthenticating }
			  type='submit' 
			  variant='contained' 
			  fullWidth>
			  Login
			</Button>
		  </Grid>

		  <Grid item xs={ 12 } sm={ 6 }>
			<Button 
			  disabled={ isAuthenticating }
			  variant='contained' 
			  fullWidth
			  onClick={ onGoogleSignIn }
			  aria-label='google-btn'
			>
			  <Google /> 
			  <Typography sx={{ ml: 1 }}>Google</Typography>
			</Button>
		  </Grid>

		  <Grid container direction='row' justifyContent='end'>

			<Link component={ RouterLink  } color='inherit' to="/auth/register">
			  Crear una cuenta
			</Link>

		  </Grid>

		</Grid>
	  </form>
	</AuthLayout>
  )
}

