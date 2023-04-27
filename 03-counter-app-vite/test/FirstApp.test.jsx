import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";



describe('Pruebas en <FirstApp />', ()=> {

 //   test('Debe hacer match con el snapshot', ()=> {

       /*  const title = 'Hola, soy Gokú';
        const { container } = render( <FirstApp title={ title }/> )

        expect( container ).toMatchSnapshot()
 */        //notar que se creó automaticamente la carpeta _snapshots_
        //si se precisa actualizar dicho snapshot presionar u luego de que jest realice la prueba y muestre la diferencia del snapshot

        
//    });

    test('Debe mostrar el título en un h1', ()=> {

        const title = 'Hola, soy Gokú';
        const { container, getByText, getByTestId, } = render( <FirstApp title={ title }/> )

        //este expect evalúa que title esté renderizado
        expect( getByText(title) ).toBeTruthy();

        //este expect evalua que title esté dentro de un h1
        /* const h1 = container.querySelector('h1');
        expect( h1.innerHTML).toContain( title );
 */

        //este expect
        expect( getByTestId('test-title').innerHTML).toContain(title)
        
    });

    test('Debe mostrar el subtitulo enviado por props', ()=> {

        const title = 'Hola , Soy Gokú';
        const subTitle = 'Soy un subtítulo';
        const { getAllByText } = render(
            <FirstApp
                title={ title }        
                subTitle={ subTitle }
            />
        );

        expect( getAllByText(subTitle).length).toBe(4);

    })
});

