import { render, screen  } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';

describe('Pruebas en <GifItem/>', () => {

  //establezco valores de props para el sujeto de pruebas
  const title= 'Saitama';
  const url= 'https://one-punch.com/saitama.jpg';

  it('Debe hacer match con el snapshot ', () => {

	// renderizo el componente especificando las props que requiere
	// y extraigo del render el container para analizarlo en el expect
	const {container} = render( <GifItem title={ title } url={ url } />)
	// screen.debug();

	//Asi se compara contra el snapshot, cuando se usa se crea la carpeta __snapshots__
	expect( container ).toMatchSnapshot();
  });

  it('Debe mostrar la imagen con el url y el alt indicado ', () => {


	// renderizo el componente especificando las props que requiere
  	render( <GifItem title={ title } url={ url } />);
	screen.debug()
	
	// getByRole para hacer referencia al elemento renderizado de interés
	// expect( screen.getByRole('img').src ).toBe( url );
	// expect( screen.getByRole('img').alt ).toBe( title );
	
	//se ve mejor si se desestructura src y alt 
	const { src, alt } = screen.getByRole('img');

	expect( src ).toBe( url );
	expect( alt ).toBe( alt );

  });

})
