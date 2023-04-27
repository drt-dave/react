const personajes = ['Gokú', 'Vegeta', 'Trunks'];

const [, p2, p3] = personajes;
console.log(p2)
console.log(p3)


const retornaArreglo = () => {
    return ['ABC', 123];
}

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros)

// Tarea
// 1. el primer valor del arr se llamará nombre
// 2. el segundo se llamará setNombre
const userState = (valor) => {
    return [valor, () => { console.log('Hola mundo') }];
}

const [nombre, setNombre] = userState('Gokú');
console.log(nombre);
setNombre();