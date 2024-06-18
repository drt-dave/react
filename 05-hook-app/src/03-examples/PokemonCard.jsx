export const PokemonCard = ( { id, name, sprites } ) => {

  return (
	<section style={ { height:200 } }>
	  <h2 className="text-capitalize">{id}-{name}</h2>
	  {/* imágenes */} 	
	  <div>
		{/* <img src={images.front_default} alt="" /> */}

		{/* Filtrar las entradas del objeto sprites par excluir los valores null */}
		{ sprites.map( sprite => (
			<img key={sprite} src={ sprite } alt={ name } />
	  ))
	  }
	  </div>
	</section>
  )
}

