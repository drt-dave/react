import { useEffect, useState } from 'react';
import { useForm } from '../hooks/useForm.js';

export const FormWithCustomHook = props => {
  

  const initialForm = {
	username:'',
	email:'',
	password:''
  }

  const { formState, onInputChange, username, email, password, onResetForm  } = useForm(initialForm);
  // const { username, email, password } = formState; 
  // al recibir ...formState desde useForm, se puede desestructurar directamente.

	return (
	<>
	  <h1>Formulario con custom hook</h1>
	  <hr />
	  
	  <input 
	  	className="form-control" 
	  	type="text" 
		placeholder="Username"
		name="username"
		value={username}
		onChange={onInputChange}
	  />
	  <input 
	  	className="form-control mt-2" 
	  	type="email" 
		placeholder="tu@email.pf"
		name="email"
		value={email}
		onChange={onInputChange}
	  />
	  <input 
	  	className="form-control mt-2" 
	  	type="password" 
		placeholder="password"
		name="password"
		value={password}
		onChange={onInputChange}
	  />

	  <button onClick={ onResetForm }  className="btn btn-primary mt-2">Borrar</button>
		
	</>
	)
}

