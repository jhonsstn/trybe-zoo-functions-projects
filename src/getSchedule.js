const data = require('../data/zoo_data');

const { species, hours } = data;

const weekDays = Object.keys(hours);

const createWeekDaysObject = () => {
  const WeekDaysObject = {};
  weekDays.forEach((day) => {
    WeekDaysObject[day] = {};
  });
  return WeekDaysObject;
};

const addOfficeHourToObject = (object) => {
  const addOfficeHour = object;
  weekDays.forEach((day) => {
    addOfficeHour[day].officeHour = `Open from ${hours[day].open}am until ${hours[day].close}pm`;
  });
  return addOfficeHour;
};

const addAnimalsExhibitionToObject = (object) => {
  const objectToAddExhibition = object;
  weekDays.forEach((day) => {
    objectToAddExhibition[day].exhibition = [];
  });

  weekDays.forEach((day) => {
    species.forEach((specie) => {
      if (specie.availability.includes(day)) {
        objectToAddExhibition[day].exhibition.push(specie.name);
      }
    });
  });
  return objectToAddExhibition;
};

const animalsWeekDays = (scheduleTarget) => {
  let animalExhibitionDays;
  species.forEach((specie) => {
    if (specie.name === scheduleTarget) {
      animalExhibitionDays = specie.availability;
    }
  });
  return animalExhibitionDays;
};

const createFullObject = () => {
  const addedWeekDays = createWeekDaysObject();
  const addOfficeHour = addOfficeHourToObject(addedWeekDays);
  const fullObject = addAnimalsExhibitionToObject(addOfficeHour);
  fullObject.Monday.officeHour = 'CLOSED';
  fullObject.Monday.exhibition = 'The zoo will be closed!';
  return fullObject;
};

function getSchedule(scheduleTarget) {
  if (weekDays.includes(scheduleTarget)) {
    const fullWeekObject = createFullObject();
    const searchedDay = fullWeekObject[scheduleTarget];
    const weekDaySchedule = {};
    weekDaySchedule[scheduleTarget] = searchedDay;
    return weekDaySchedule;
  }
  const animalsNames = [];
  species.forEach((specie) => {
    animalsNames.push(specie.name);
  });
  if (animalsNames.includes(scheduleTarget)) {
    return animalsWeekDays(scheduleTarget);
  }

  if (scheduleTarget === undefined || !weekDays.includes(scheduleTarget)) {
    return createFullObject();
  }
}

module.exports = getSchedule;
