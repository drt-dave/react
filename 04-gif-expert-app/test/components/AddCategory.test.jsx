import { AddCategory } from './../../src/components/AddCategory';
import { fireEvent, render, screen } from '@testing-library/react';

describe('Pruebas en <AddCategory/>', () => {

  it('Debe cambiar el valor de la caja de texto ', () => {
	//se renderiza en el entorno de pruebas el componente
	//proporcionando una función vacia  () => {} como valor de la propiedad
	//onNewCategory ya que es el tipo requerido por el componente

	render( <AddCategory onNewCategory={ () => {  }  }/> );

	//se hace referencia a la caja de texto donde está el input
	const input = screen.getByRole('textbox');
	// screen.debug(input) //se aprecia value="" en el console.log

	//se dispara el evento input (algo ingresó) y se agrega el valor ingresado
	fireEvent.input(input, { target: { value: 'Saitama' } });
	// screen.debug(input) // se aprecia value="Saitama" en el console.log

	//se espera que el value en input sea ahora 'Saitama'
	expect( input.value ).toBe('Saitama');
  });
  it('Debe llamar onNewCategory si el input tiene un valor ', () => {

	// se establece un valor de pruebas
	const inputValue = 'Saitama';

	//Se establece una función ficticia para rastrear el llamado al onNewCategory
	const onNewCategory = jest.fn();

	//Se renderiza el componente en el entorno de pruebas
	render( <AddCategory onNewCategory={ onNewCategory } /> );

	//se referencia al input y al formulario
	const input = screen.getByRole('textbox');
	const form = screen.getByRole('form');
	// testinLibrary no encuentra 'form', se agrega entonces aria-label='form' 
	// como propiedad del formulario en <AddCategory /> :
	// return (
	//   <form  onSubmit ={ onSubmit } aria-label='form'/>

	// se dispara el evento input que indica que se ingresó algo y se establece
	// el valor (value = inputValue)
	fireEvent.input( input, { target: { value: inputValue } } );
	// screen.debug()// en <input ahora value es el inputValue 'Saitama'

	//expect( onNewCategory ).toHaveBeenCalled();//Daría error pq aun no se llama 
	//onNewCategory, para que se llame en necesario disparar el submit del form
	//y que se haya ingresado algo en el input
	fireEvent.submit(form);
	// screen.debug()//submit llama onNewCategory y establece value="" en input
	// se puede probar que esta vacia:
	expect(input.value).toBe('');

	//onNewCategory fue llamada, cuantas veces y con inputValue como parametro
	expect(onNewCategory).toHaveBeenCalled();
	expect(onNewCategory).toHaveBeenCalledTimes(1);
	expect(onNewCategory).toHaveBeenCalledWith(inputValue);
  });
  it('No debe llamar el onNewCategory si el input está vacío ', () => {

	//se establece función ficticia para onNewCategory
	const onNewCategory = jest.fn();

	//se renderiza el componente en el entorno de pruebas
	render( <AddCategory onNewCategory = { onNewCategory }/> );

	//se hace referencia al elemento form del componente
	const form = screen.getByRole('form');

	//se dispara el evento submit
	fireEvent.submit(form);

	// screen.debug(); //value = "" por lo cual onNewCategory no fue llamada

	expect(onNewCategory).not.toHaveBeenCalled();
  });

})


