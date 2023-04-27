const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 324756434,
        lat: 14.32355,
        lng: 34.5546
    }

};

//console.table(persona);

console.log(persona);

const persona2 = {...persona };
persona2.nombre = 'Petter';

console.log(persona2);