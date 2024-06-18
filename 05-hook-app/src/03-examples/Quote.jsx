import {useLayoutEffect, useRef, useState} from "react"

export const Quote = ({ title, price }) => {

  const pRef = useRef();
  const [boxSize, setBoxSize] = useState( {width:0 , heigh:0 } );

  useLayoutEffect(() => {
	// Obtiene las dimensiones del elemento <p> utilizando getBoundingClientRect()
	const { height, width } =pRef.current.getBoundingClientRect();
	// Actualiza el estado con las nuevas dimensiones
	setBoxSize( { height, width } );
  }, [ title ])//El efecto se ejecuta cada vez que el título cambia

  return (
	<>
	  <blockquote 
		className="blockquote text-end"
		style={{display:'flex'}}
	  >
		{/* 
		  El elemento <p> con el título de la cita, al cual se le asigna una referencia utilizando el atributo ref
		  Esta referencia se utilizará para medir el tamaño del elemento
		  */}
		<p ref={pRef} className="mb-1">{title}</p>
		<footer className="blockquote-footer">{price}</footer>
	  </blockquote>
	  <code>{JSON.stringify(boxSize)}</code>
	</>
  )
}

