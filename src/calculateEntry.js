const data = require('../data/zoo_data');

const { prices } = data;

function countEntrants(entrants) {
  const child = entrants.filter((entrant) => entrant.age < 18).length;
  const adult = entrants.filter((entrant) => entrant.age >= 18 && entrant.age < 50).length;
  const senior = entrants.filter((entrant) => entrant.age >= 50).length;

  return { child, adult, senior };
}

function calculateEntry(entrants) {
  if (entrants === undefined) return 0;
  if (Object.keys(entrants).length === 0) return 0;

  const countedEntrants = countEntrants(entrants);

  const childValue = countedEntrants.child * prices.child;
  const adultValue = countedEntrants.adult * prices.adult;
  const seniorValue = countedEntrants.senior * prices.senior;

  return childValue + adultValue + seniorValue;
}

module.exports = { calculateEntry, countEntrants };
