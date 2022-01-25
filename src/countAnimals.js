const data = require('../data/zoo_data');

const { species } = data;

const showAllNumber = () => {
  const animals = {};
  species.forEach((specie) => {
    animals[specie.name] = specie.residents.length;
  });
  return animals;
};

const showSpecieNumber = (animal) => {
  let quantityOfAnimals = 0;
  species.forEach((specie) => {
    if (specie.name === animal.specie) {
      quantityOfAnimals = specie.residents.length;
    }
  });
  return quantityOfAnimals;
};

const showSpecieSexNumber = (animal) => {
  let quantityOfGenderAnimals = 0;
  const foundSpecie = species.find((specie) => specie.name === animal.specie);
  foundSpecie.residents.forEach((resident) => {
    if (resident.sex === animal.sex) quantityOfGenderAnimals += 1;
  });
  return quantityOfGenderAnimals;
};

function countAnimals(animal) {
  if (animal === undefined) {
    return showAllNumber();
  }

  if (Object.keys(animal).length === 1) {
    return showSpecieNumber(animal);
  }

  if (Object.keys(animal).length === 2) {
    return showSpecieSexNumber(animal);
  }
}

module.exports = countAnimals;
