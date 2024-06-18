//Importar el hook useCounter desde su ubicación 
import { useCounter } from '../hooks/useCounter.js';

//Componente funcional CounterWithCustomHook
export const CounterWithCustomHook = () => {
  //Utilizar el hook useCounter para obrener las funciones y el estado del contador
  const {  increment, decrement, reset, counter } = useCounter();

	return (
	<>

	  <h1> Counter with Hook: { counter }</h1>
	  <hr />
	 {/* Cuando la función a ejecutar requiere argumentos se escribe un callback */} 
	  <button className="btnbtn-primary" onClick={ () => { increment(2) }  }>+1</button>
	  {/* Cuando no requiere argumentos simplemente se pasa la función */}
	  <button className="btnbtn-primary" onClick={ reset }>Reset</button>
	  <button className="btnbtn-primary" onClick={ () => { decrement(1) }  }>-1</button>
		
	</>
	)
}

