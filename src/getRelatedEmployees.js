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

function getRelatedEmployees(managerId) {}

module.exports = { isManager, getRelatedEmployees };
