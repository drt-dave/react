// Como <GifGrid /> utiliza el customHook useFetchGifs para estas pruebas 
// se hará un mock del hook

import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

//luego de importar el hook useFetchGifs, se crea el mock de este hook
//proporcionando la ruta en la que se encuentra el archibo del hook
jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {
  //se establece un valor para la categoria en el entorno de pruebas
  const category = 'One Piece';

  it('Debe mostrar el loading inicialmente ', () => {
	//Se proporcionan los valores que se espera sean retornados por el hook
	//al arrancar el componente, para eso se usa el mock del hook
	useFetchGifs.mockReturnValue({
	  images:[],
	  isLoading: true,

	  //se renderiza el componenete proporcionando el prop category
	})
	render(<GifGrid category={category} /> );
	// screen.debug();//se aprecia "Cargando.." renderizado
	
	//se espera encontrar "Cargando..." y la categoria en el render
	expect(screen.getByText('Cargando...'));
	expect(screen.getByText(category));
  })
})
