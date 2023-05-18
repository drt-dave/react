import { useState } from "react";
import { PropTypes} from 'prop-types';

export const AddCategory = ({onNewCategory}) => {

  const [inputValue, setinputValue] = useState("");

  //(event) -> event.target.value

  const onInputChange = ({ target }) => {
    setinputValue(target.value);
  };

  
  const onSubmit = (event) => {

    //esto es para que no se recarge la pág
    event.preventDefault();

    //esta condición evita que se consideren espacios vacios como input
    if ( inputValue.trim().length <= 1) return;

    //esto limpia el input value
    setinputValue('');

    //setCategories( categories => [ inputValue, ...categories]);
    onNewCategory(inputValue.trim());


    
  }



  return (
    //<form onSubmit= {(event) => onSubmit(event)}>
    <form onSubmit= {onSubmit} aria-label="form">
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        //onChange={ (event) => onInputChange(event)}
        onChange={onInputChange}
      />
    </form>
  );
};


AddCategory.propTypes = {
  
  onNewCategory : PropTypes.func.isRequired,


}