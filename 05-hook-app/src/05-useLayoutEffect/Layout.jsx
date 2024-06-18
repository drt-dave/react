import React from "react";
// Importa los componentes LoadingMessage y Quote desde el directorio "../03-examples"
import { LoadingMessage, Quote } from "../03-examples"; 
// Importa los hooks personalizados useCounter y useFetch desde el directorio "../hooks"
import { useCounter, useFetch } from "../hooks"; 

// El componente Layout
export const Layout = () => {
  // Utiliza el hook useCounter para obtener el contador y la función de incremento
  const { counter, increment } = useCounter();

  // Utiliza el hook useFetch para obtener los datos de la API
  const { data, hasError, isLoading } = useFetch(`https://fakestoreapi.com/products/${counter}`);

  // Si data es no nulo (se ha recibido respuesta de la API), desestructura title y price de data
  const { title, price } = !!data && data;

  // Retorna un fragmento con el encabezado, la cita o un mensaje de carga dependiendo del estado de isLoading
  // y un botón para cargar la próxima cita
  return (
	<>
	  <h1>BreakingBad Quotes</h1>
	  <hr />

	  {/* 
		Si isLoading es true, muestra el componente LoadingMessage que indica que se está cargando
		De lo contrario, muestra el componente Quote con el título y el precio de la cita obtenidos de la API
		*/}
	  {isLoading ? <LoadingMessage /> : <Quote title={title} price={price} />}

	  {/* Botón que al hacer clic llama a la función increment para cargar la próxima cita */}
	  <button className="btn btn-primary" onClick={() => increment()}>
		Next quote
	  </button>
	</>
  );
};
