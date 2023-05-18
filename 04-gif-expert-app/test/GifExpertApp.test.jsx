//Estas pruebas están pendientes//Estas pruebas están pendientes//Estas pruebas están pendientes//Estas pruebas están pendientes//Estas pruebas están pendientes//Estas pruebas están pendientes//Estas pruebas están pendientes


import {render,screen} from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';



describe('Pruebas en <GifExpertApp />', () => {

        const { container } = render( <GifExpertApp /> );

    test('Debe hacer match con el snapshot', () => {

        screen.debug();
        expect( container ).toMatchSnapshot();

        
    });

    
    test('Debe agregar una nueva categoria', () => {

        
    }); 
    
    
    
});

