import {render,screen,fireEvent } from '@testing-library/react';
import { CounterApp } from '../src/CounterApp';

describe('Pruebas en CounterApp', ()=> {

    const initialValue= 100;

    test('Debe hacer match con el snapshot', ()=> {

        const { container } = render( <CounterApp />);
        expect( container ).toMatchSnapshot();

    })

    test('Debe mostrar el valor inicial de 100',()=> {

        render( <CounterApp/> );
        //console.log(screen.getByText(value).innerHTML);
        expect( screen.getByText(initialValue).innerHTML).toEqual("100");

    })

    test('Debe incrementar con el botón +1', ()=>{

        render( <CounterApp value={ initialValue } />);
        fireEvent.click( screen.getByText('+1'));
        expect( screen.getByText('101')).toBeTruthy();
    });

    test('Debe decrementar con el botón -1', ()=>{

        render( <CounterApp value={ initialValue } />);
        fireEvent.click( screen.getByText('-1'));
        expect( screen.getByText('99')).toBeTruthy();
    });
    
    test('Debe funcionar el botón reset', ()=>{

        render( <CounterApp value={ 1000001 } />);
        fireEvent.click( screen.getByRole('button', {name: 'btn-reset'}));
        expect( screen.getByText(1000001)).toBeTruthy();
    });
})