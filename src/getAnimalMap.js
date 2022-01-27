const data = require('../data/zoo_data');

const { species } = data;

const locations = ['NE', 'NW', 'SE', 'SW'];

const animalsLocation = () => {
  const resultObject = {};
  locations.forEach((location) => {
    const animalArray = [];
    species.forEach((specie) => {
      if (specie.location === location) {
        animalArray.push(specie.name);
      }
    });
    resultObject[location] = animalArray;
  });
  return resultObject;
};

const getNamesSex = (specieName, sex) => {
  const animalNames = [];
  species.forEach((specie) => {
    if (specie.name === specieName) {
      specie.residents.forEach((resident) => {
        if (resident.sex === sex) {
          animalNames.push(resident.name);
        }
      });
    }
  });
  return animalNames;
};

const getNames = (specieToFindNames, sex) => {
  if (!sex) {
    const animalNames = [];
    species.forEach((specie) => {
      if (specie.name === specieToFindNames) {
        specie.residents.forEach((resident) => {
          animalNames.push(resident.name);
        });
      }
    });
    return animalNames;
  }
  return getNamesSex(specieToFindNames, sex);
};

const animalsLocationWithNames = (sexInfo) => {
  const resultObject = {};
  locations.forEach((location) => {
    const locationArray = [];
    species.forEach((specie) => {
      if (specie.location === location) {
        const animalObject = {};
        animalObject[specie.name] = getNames(specie.name, sexInfo);
        locationArray.push(animalObject);
      }
    });
    resultObject[location] = locationArray;
  });
  return resultObject;
};

const animalsLocationWithNamesSorted = (sexInfo) => {
  const resultObject = {};
  locations.forEach((location) => {
    const locationArray = [];
    species.forEach((specie) => {
      if (specie.location === location) {
        const animalObject = {};
        animalObject[specie.name] = getNames(specie.name, sexInfo).sort();
        locationArray.push(animalObject);
      }
    });
    resultObject[location] = locationArray;
  });
  return resultObject;
};

function getAnimalMap(options) {
  if (!options) return animalsLocation();
  const sexInfo = options[Object.keys(options).find((key) => key === 'sex')];
  if (!Object.keys(options).includes('includeNames')) {
    return animalsLocation();
  }
  if (Object.keys(options).includes('sorted')) {
    return animalsLocationWithNamesSorted(sexInfo);
  }
  if (Object.keys(options).includes('includeNames')) {
    return animalsLocationWithNames(sexInfo);
  }
}

// getAnimalMap({ includeNames: true, sex: 'male' }); //?

// console.log(getAnimalMap({ includeNames: true })); //?

module.exports = getAnimalMap;
