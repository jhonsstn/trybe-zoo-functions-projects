const data = require('../data/zoo_data');

const { employees } = data;

function isManager(id) {
  let managerEmployee;
  employees.forEach((employee) => {
    if (managerEmployee === undefined) {
      managerEmployee = employee.managers.find((manager) => manager === id);
    }
  });
  return managerEmployee !== undefined;
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    const isManagerOf = employees.filter((employee) => employee.managers.includes(managerId));
    let nameOfEmployees = [];
    nameOfEmployees = isManagerOf.map((employee) => `${employee.firstName} ${employee.lastName}`);
    return nameOfEmployees;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
