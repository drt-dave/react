import { useState } from 'react';

export const useForm = (initialForm = {}) => {
  //El estado inicial es {} si no se envía con el llamado al hook

  const [formState, setFormState] = useState(initialForm); //Se establece el estado inicial

  //Se desestructura target del evento input que recibe onInputChange
  const onInputChange = ({ target }) => {
	//se desestructura
	const { name, value } = target;
	setFormState({
	  ...formState,
	  [name]: value, //Esta es la sintaxis para setar solo la propiedad name
	  //si quisiera setear una nueva propiedad [nuevaPropiedad]:valorNuevaPropiedad
	});
  };

  const onResetForm = () => { 
	setFormState( initialForm )
  };

  return {

	...formState,
	formState,
	onInputChange,
	onResetForm,
  };
};

