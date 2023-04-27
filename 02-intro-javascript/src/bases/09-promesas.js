import { getHeroById } from "./bases/08-imp-exp";

/* const promesa = new Promise((resolve, reject) => {

    setTimeout(() => {
        const heroeById = getHeroById(2);
        resolve(heroeById);
    }, 2000)
})

promesa.then(() => {
    console.log('Then de la promesa')
}) */
const getHeroByIdAsync = (id) => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            const heroById = getHeroById(id);
            heroById ?
                resolve(heroById) :
                reject(`El id ${id} no existe`)
        }, 2000)
    })
}

getHeroByIdAsync(1)
    .then(console.log)
    .catch(console.warn);