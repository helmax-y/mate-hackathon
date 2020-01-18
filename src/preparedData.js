function daysInMonth (month, year) {
  const arrayOfDays = [...new Array(new Date(year, month, 0).getDate() + 1).keys()];
  arrayOfDays.shift();

  return arrayOfDays;
}

export default [
  {
    id: 1,
    month: 'January',
    dates: daysInMonth(1, 2020).map(date => ({
      date,
      events: [],
    })),
  },
  {
    id: 2,
    month: 'February',
    days: daysInMonth(2, 2020).map(date => ({
      date,
      events: [],
    })),
  },
  {
    id: 3,
    month: 'March',
    days: daysInMonth(3, 2020).map(date => ({
      date,
      events: [],
    })),
  },
  {
    id: 4,
    month: 'April',
    days: daysInMonth(4, 2020).map(date => ({
      date,
      events: [],
    })),
  },
  {
    id: 5,
    month: 'May',
    days: daysInMonth(5, 2020).map(date => ({
      date,
      events: [],
    })),
  },
  {
    id: 6,
    month: 'June',
    days: daysInMonth(6, 2020).map(date => ({
      date,
      events: [],
    })),
  },
  {
    id: 7,
    month: 'July',
    days: daysInMonth(7, 2020).map(date => ({
      date,
      events: [],
    })),
  },
  {
    id: 8,
    month: 'August',
    days: daysInMonth(8, 2020).map(date => ({
      date,
      events: [],
    })),
  },
  {
    id: 9,
    month: 'September',
    days: daysInMonth(9, 2020).map(date => ({
      date,
      events: [],
    })),
  },
  {
    id: 10,
    month: 'October',
    days: daysInMonth(10, 2020).map(date => ({
      date,
      events: [],
    })),
  },
  {
    id: 11,
    month: 'November',
    days: daysInMonth(11, 2020).map(date => ({
      date,
      events: [],
    })),
  },
  {
    id: 12,
    month: 'December',
    days: daysInMonth(12, 2020).map(date => ({
      date,
      events: [],
    })),
  },
];