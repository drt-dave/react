import heroes, { owners } from '../data/heroes';
//console.log(heroes);


export const getHeroById = (id) => heroes.find((hero) => hero.id === id);

//console.log(getHeroById(1));

export const getHeroesByOwner = (owner) => heroes.filter((hero) => hero.owner === owner);

//console.log(getHeroesByOwner('DC'));
//console.log(owners);