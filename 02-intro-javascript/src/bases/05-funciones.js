// Funciones en javascript
const saludar = function(nombre) {
    return `Hola, ${nombre}`;
}

const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}

const saludar3 = nombre => `Hola, ${nombre}`;

const saludar4 = () => 'Hola mundo';


console.log(saludar('Kathy'));
console.log(saludar2('David'));
console.log(saludar3('Ramón'))
console.log(saludar4());


const getUser = () => ({
    uid: 'ABC123',
    username: 'El_Papi1502'
})

const user = getUser();
console.log(user);

// Tarea :)

// 1. Transformar a una función flecha
// 2. Tiene que retornar un objeto implicito
// 3. Pruebas

/* function getUsuarioActivo(nombre) {
    return {
        uid: 'ABC567',
        username: nombre
    }
}; */
const getUsuarioActivo = (nombre) => ({
    uid: 'ABC567',
    username: nombre
});


const usuarioActivo = getUsuarioActivo('Fernando');
console.log(usuarioActivo);