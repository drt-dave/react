
import { useState } from 'react';
import PropTypes from 'prop-types';

// este componente proporciona un input donde el usuario puede ingresar nuevas categorías. Cuando el usuario envía el formulario, se llama a una función proporcionada a través de la prop onNewCategory, y luego el input se reinicia.
// en la parte del test se agregan los propTypes de este componente

export const AddCategory = ({ onNewCategory }) => {

  const [ inputValue, setInputValue ] = useState('');

  const onInputChange = ({ target }) => {
	setInputValue( target.value );
  }

  const onSubmit = ( event ) => {
	event.preventDefault();
	if( inputValue.trim().length <= 1) return;

	// setCategories( categories => [ inputValue, ...categories ]);
	setInputValue('');
	onNewCategory( inputValue.trim() );
  }

  return (
	<form onSubmit={ onSubmit } aria-label= 'form'>
	  <input 
		type="text"
		placeholder="Buscar gifs"
		value={ inputValue }
		onChange={ onInputChange }
	  />
	</form>
  )
}

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired
}
