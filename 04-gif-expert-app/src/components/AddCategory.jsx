import { useState } from "react";

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

    //setCategories( categories => [ inputValue, ...categories]);
    onNewCategory(inputValue.trim());

    //esto limpia el input value
    setinputValue('');

    
  }



  return (
    //<form onSubmit= {(event) => onSubmit(event)}>
    <form onSubmit= {onSubmit}>
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
