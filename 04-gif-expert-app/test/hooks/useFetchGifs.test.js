import { renderHook, waitFor} from '@testing-library/react';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

describe('Pruebas en el hook useFetchGifs', () => {

  it('Debe regresar el estado inicial', () => {

	//renderHook renderiza solo el hook sin necesidad de renderizar
	//todo el componente que lo usa, extraemos del hook el result 
	const { result } = renderHook(() => useFetchGifs('One Piece') );
	// console.log(result)//{ current: { images: [], isLoading: true } }

	//se desestructura images y isLoading 
	const { images, isLoading } = result.current;

	//se hacen las aserciones respectivas
	expect( images.length ).toBe(0);
	expect( isLoading ).toBeTruthy();
  });
  // Aquí se usa async antes del callball del segundo argumento de test
  // ya que se espera una promesa
  it('Debe retornar un arreglo de imagenes y isLoading en false ',async() => {

	//siempre se renderiza el hook con renderHook
	const { result } = renderHook( () => useFetchGifs('aikido')  );
	//se espera la promesa del hook (las imagenes)
	//se usa waitFor y se marca con await
	await waitFor(


	  //Esto devolvería [] pues es el estado inicial
	  // () => expect( result.current.images.length ) .toBe(0)

	  //cuando se obtiene respuesta el componente actualiza y envia el arreglo
	  () => expect( result.current.images.length ).toBeGreaterThan(0)
	);
	// console.log( result.current.images );

	//se desestructura para analisis
	const { images, isLoading } = result.current;

	//se hace las aserciones de images.length y isLoading en false
	expect( images.length ).toBeGreaterThan(0);
	expect( isLoading ).toBeFalsy();
  })
})
