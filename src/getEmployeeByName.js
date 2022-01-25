const data = require('../data/zoo_data');

const { employees } = data;

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) return {};
  const selectedEmployee = employees.find(
    (employee) => employee.firstName === employeeName || employee.lastName === employeeName,
  );
  return selectedEmployee;
}

module.exports = getEmployeeByName;
