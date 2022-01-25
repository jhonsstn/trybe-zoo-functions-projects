const data = require('../data/zoo_data');

const allSpecies = data.species;

function getAnimalsOlderThan(animal, age) {
  let isOlder;
  allSpecies.forEach((specie) => {
    if (specie.name === animal) {
      isOlder = specie.residents.every((resident) => resident.age >= age);
    }
  });
  return isOlder;
}

module.exports = getAnimalsOlderThan;
