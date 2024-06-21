import { useEffect, useState  } from "react";
//Objeto para almacenar en caché los datos recuperados
const localCache = {};
//Función personalizada de React para realizar solicitudes de red
export const useFetch = ( url ) => {

  const initialState = {
	data: null,
	isLoading: true,
	hasError: false,
	error: null,
  }

  //Estado inicial de la función, con datos nulos, isLoading verdadero (indicativo de carga) y sin errores
  const [state, setState] = useState( initialState );

  //Efecto secundario que se ejecuta cuando cambia la URL
  useEffect(() => {
	//Llama a la función getFetch para realizar la solcitud de red
	getFetch();
  }, [url]);

  //Función para establecer el estado de carga y aparezca "cargando..." antes de hacer fetch
  const setLoadingState = () => { 
	setState( initialState );
  };

  //Función para reaclizar la solicitud de red
  const getFetch = async () => { 
	if ( localCache[url] ) {
	  console.log('Usando caché');
	  setState({
		data: localCache[url],
		isLoading: false,
		hasError: false,
		error: null,
	  });
	  return;	
	}

	setLoadingState(); //Establece el estado de carga en Loading antes de hacer el fetch
	const resp = await fetch(url);// Realiza la solicitud de red usando fetch()
	//Espera 1.5 segundos antes de continuar (simulando un retraso)
	await new Promise((resolve) => setTimeout(resolve,1500));
	// Si la respuesta no es exitosa ( HTTP status no es 200 ), establece el estado de error
	if ( !resp.ok ) {
	  setState({
		data: null,
		isLoading: false,
		hasError: true,
		error: {
		  code: resp.status,
		  message: resp.statusText,
		},
	  });
	  return; //Detiene la ejecución del código en caso de error
	}

	//Si la respuesta es exitosa, convierte los datos en respuesta a JSON y actualiza el estado con los datos
	const data = await resp.json();
	setState({
	  data: data,
	  isLoading: false,
	  hasError: false,
	  error: null,
	});
	localCache[url] = data;
  }; 
  //Devuelve el estado actual de los datos, carga y errores
  return { 
	data: state.data,
	isLoading: state.isLoading,
	hasError: state.hasError,
  };
};



