import { getGifs  } from '../../src/helpers/getGifs';

describe('Pruebas en getGifs', () => {

  //como getGifs devuelve una promesa se antepone async al callback del 
  //segundo argumento del test y await al llamado de getGifs
	it('Debe retornar un arreglo de gifs ', async() => {

	  const gifs = await getGifs('One Piece');
	  // console.log(gifs);
	  
	  //se espera que la longitud del array recibido sea > 0
	  expect( gifs.length ).toBeGreaterThan(0);

	  //se espera que la primera posición del arreglo contenga un objeto 
	  //de la forma especificada (se usa .any(String) en el expect)
	  expect( gifs[0] ).toEqual({
		id: expect.any(String),
		title: expect.any(String),
		url: expect.any(String)
	  })
	  
		
	})
})
