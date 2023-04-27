// Desestructuración 
// Asignación Desestructurante

const persona = {
    nombre: 'Tony',
    edad: '45',
    clave: 'Ironman'
}

/* console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.clave); */

//const { nombre, edad, clave } = persona;

/* console.log(nombre);
console.log(edad);
console.log(clave); */

const usuarioContexto = ({ clave, nombre, edad, rango = 'Teniente' }) => {
    //    console.log(nombre, edad, rango);
    return {
        nombreClave: clave,
        anios: edad,
        latilng: {
            lat: 14.1232,
            lng: -12.3232
        }
    }
}

const { nombreClave, anios, latilng: { lat, lng } } = usuarioContexto(persona);

console.log(nombreClave, anios);
console.log(lat, lng);