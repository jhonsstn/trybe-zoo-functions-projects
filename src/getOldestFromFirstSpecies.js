const data = require('../data/zoo_data');

const { species, employees } = data;

const findEmployee = (id) => {
  const foundEmployee = employees.find((employee) => employee.id === id);
  return foundEmployee;
};

const findAnimals = (employee) => {
  const foundAnimals = employee.responsibleFor;
  return foundAnimals;
};

const findFirstsSpecies = (foundAnimals) => {
  const firstSpecie = species.find((specie) => specie.id === foundAnimals[0]);
  return firstSpecie;
};

const findOlder = (firstSpecie) => {
  const olderAnimal = [0, 0, 0];
  firstSpecie.residents.forEach((resident) => {
    if (resident.age > olderAnimal[2]) {
      olderAnimal[0] = resident.name;
      olderAnimal[1] = resident.sex;
      olderAnimal[2] = resident.age;
    }
  });
  return olderAnimal;
};

function getOldestFromFirstSpecies(id) {
  const foundEmployee = findEmployee(id);

  const foundAnimals = findAnimals(foundEmployee);

  const firstSpecie = findFirstsSpecies(foundAnimals);

  return findOlder(firstSpecie);
}

module.exports = getOldestFromFirstSpecies;
