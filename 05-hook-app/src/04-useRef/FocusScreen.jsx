// En resumen, este componente React FocusScreen sigue proporcionando una interfaz para enfocar dinámicamente un campo de entrada de texto al hacer clic en un botón. En esta versión, se utiliza la referencia inputRef.current.select() directamente en la función onClick para enfocar el campo de entrada de texto, eliminando la necesidad de utilizar document.querySelector.


import {useRef} from "react"



export const FocusScreen = () => {

  const inputRef = useRef();

  const onClick = () => { 
	// document.querySelector('input').select();
	// console.log(inputRef);
	inputRef.current.select();
  } 



	return (
	<>
	  <h1>Focus Screen</h1>
	  <hr />
	  
	  <input 
		ref={ inputRef }
	  	className="form-control" 
		placeholder="Ingrese su nombre"
	  	type="text" 
	  />
	  <button 
		className="btn btn-primary mt-2"
	  	onClick={ onClick }>
		Set Focus
	  </button>
	</>
	)
}

