describe('Pruebas en <DemoComponent/>', () => {
    test('Esta prueba no debe de fallar', () => {

        // 1. Inicialización 
        const msg1 = 'Hola Mundo';
        // 2. Estímulo
        const msg2 = msg1.trim();
        // 3. Observar el comportamiento... esperado
        //expect(msg1).toBe(msg2);
        expect(msg1).toBe(msg2);

    })
})