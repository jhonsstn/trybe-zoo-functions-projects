const data = require('../data/zoo_data');

const { species, employees } = data;

const getEmployee = (employeeObject) => {
  const foundEmployee = employees.find((employee) => {
    const employeeValues = Object.values(employee);
    const employeeObjectValues = Object.values(employeeObject);
    return employeeValues.includes(employeeObjectValues[0]);
  });
  return foundEmployee;
};

const getSpecies = (employeeResponsible) => {
  const foundSpeciesNames = employeeResponsible.map((animalId) => {
    const foundSpecies = species.find((specie) => specie.id === animalId);
    return foundSpecies.name;
  });
  return foundSpeciesNames;
};

const getLocations = (employeeResponsible) => {
  const foundSpeciesLocations = employeeResponsible.map((animalId) => {
    const foundSpecies = species.find((specie) => specie.id === animalId);
    return foundSpecies.location;
  });
  return foundSpeciesLocations;
};

const createObject = (foundEmployee) => {
  const employeeCoverage = {
    id: foundEmployee.id,
    fullName: `${foundEmployee.firstName} ${foundEmployee.lastName}`,
    species: getSpecies(foundEmployee.responsibleFor),
    locations: getLocations(foundEmployee.responsibleFor),
  };
  return employeeCoverage;
};

function getEmployeesCoverage(object) {
  try {
    if (object === undefined) {
      const employeeCoverageOfAll = [];
      employees.forEach((employee) => {
        const employeeCoverage = createObject(employee);
        employeeCoverageOfAll.push(employeeCoverage);
      });
      return employeeCoverageOfAll;
    }

    const foundEmployee = getEmployee(object);
    const employeeCoverage = createObject(foundEmployee);
    return employeeCoverage;
  } catch (error) {
    throw new Error('Informações inválidas');
  }
}

// getEmployeesCoverage();

module.exports = getEmployeesCoverage;
