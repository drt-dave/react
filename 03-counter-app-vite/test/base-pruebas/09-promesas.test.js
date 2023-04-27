import { getHeroeByIdAsync } from '../../src/base-pruebas/09-promesas';

describe('Pruebas en 09-promesas', () => {
    test('getHeroeByIDAsync debe retornar un héroe', (done) => {

        //Aquí done se envía para hacerle saber a jest que termina la prueba ya que es Asincrona y el no sabe :V  

        const id = 1;
        getHeroeByIdAsync(id)
            .then(hero => {

                expect(hero).toEqual({
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                });


                done();

            })

    })
    test('getHeroeByIDAsync debe retornar un error si heroe no existe', (done) => {

        const id = 100;
        getHeroeByIdAsync(id)
            .then(hero => {
                expect(hero).toBeFalsy();
                done();
            })
            .catch(error => {

                expect(error).toBe(`No se pudo encontrar el héroe ${id}`)



                done();

            })

    })
})