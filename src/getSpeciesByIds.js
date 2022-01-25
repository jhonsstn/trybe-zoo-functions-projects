const data = require('../data/zoo_data');

const allSpecies = data.species;

function getSpeciesByIds(...ids) {
  const species = [];
  ids.forEach((id) => {
    allSpecies.forEach((specie) => {
      if (id === specie.id) species.push(specie);
    });
  });
  return species;
}

module.exports = getSpeciesByIds;
