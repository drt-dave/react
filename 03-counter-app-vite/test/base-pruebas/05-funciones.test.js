import { getUser, getUsuarioActivo } from '../../src/base-pruebas/05-funciones';

describe('Pruebas en 05-funciones', () => {
    test('getUser debe retornar un objeto', () => {

        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();

        expect(testUser).toStrictEqual(user);

    });

    //tarea
    test('getUsuarioActivo debe retornar un objeto', () => {

        const name = 'David';
        const user = getUsuarioActivo(name);

        expect(user).toStrictEqual({
            uid: 'ABC567',
            username: name
        });

    })

});

//Tarea:  Realizar el mismo procedimiento de prueba con el archivo 06-deses