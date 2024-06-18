import { useEffect, useState } from 'react'
import { Message } from './Message'
//

export const SimpleForm = () => {

  const [formState, setFormState] = useState({
	username: 'strider',
	email: 'pandora@gmail.com',
  })

  const { username, email } = formState;

  //Se desestructura target del evento input que recibe onInputChange

  const onInputChange = ({ target }) => {
	//Se desestructura
	const { name, value } = target;
	setFormState({
	  ...formState,
	  [name]: value, //Esta es la sintaxis para setear sólo la propiedad name
	  //Si quisiera setear una nueva propiedad [nuevaPropiedad]:ValorNuevaPropiedad
	})
  }

  //Es considerado una buena práctica tener los useEffect separados de a una dependecia
  //Descomentando el console.log() se puede analizar en consola cuando se dispara cada uno
  useEffect(() => {
	// console.log('useEffect called!')
  }, []);//Un arreglo vacio de dependencias llamará el useEffect una sola vez al ser montado el componente

  useEffect(() => {
	// console.log('formState changed!')
  }, [ formState ]);//useEffect será llamado al montar el componente y después unicamente cuando formState cambie
  	
  useEffect(() => {
	// console.log('email changed!')
  }, [ email ]);//Un arreglo vacio de dependencias llamará el useEffect una sola vez al ser montado el componente

	return (
	<>
	  <h1>Formulario Simple</h1>
	  <hr />
	  <input 
	  	className="form-control" 
	  	type="text" 
		placeholder="Username"
		name="username"
		value={ username }
		onChange={ onInputChange }
	  />

	  <input 
	  	className="form-control mt-2" 
	  	type="email" 
		name="email"
		value={ email }
		onChange={ onInputChange }
	  />
	  {
		( username === 'strider2' ) && <Message/>
	  }
		
	</>
	)
}

