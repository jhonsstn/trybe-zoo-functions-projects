const data = require('../data/zoo_data');

const { species } = data;

function getSpeciesByIds(...ids) {
  const selectedSpecies = [];
  ids.forEach((id) => {
    species.forEach((specie) => {
      if (id === specie.id) selectedSpecies.push(specie);
    });
  });
  return selectedSpecies;
}

module.exports = getSpeciesByIds;
