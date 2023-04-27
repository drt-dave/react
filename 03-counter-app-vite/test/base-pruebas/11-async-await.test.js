import { getImagen } from "../../src/base-pruebas/11-async-await"

describe('Pruebas en 11-async-await', () => {
    test('getImagen debe retornar un URL de la imagen', async() => {

        const url = await getImagen();
        expect(typeof url).toBe('string');

    })
    test('getImagen debe retornar un error si no tenemos la API', async() => {

        const resp = await getImagen();
        //expect(resp).toBe('No se encontró la imagen');


        //se espera un error en el test

    })
})