/* 
DATE STRING FROM FRONT END
2023-01-03
*/

export const convertDateStringFromInput = (date, time) => {
  const dateFormat = new Intl.DateTimeFormat('en-US').format(date);
  const datePartials = [
    parseInt(dateFormat.slice(4, 8)),
    parseInt(dateFormat.slice(0, 1)),
    parseInt(dateFormat.slice(2, 3)),
    parseInt(Object.values(time)[0]),
    parseInt(Object.values(time)[1]),
  ];
  return datePartials;
};

/*
DATE FROM BACK END
2023-01-09T18:33:01.366Z
*/

const convertDateStringFromDb = (date) => {
  return (date = ['year', 'month', 'day', 'hour', 'minute']);
};

let year;
let month;
let day;
let hour;
let minute;

let date = ['year', 'month', 'day', 'hour', 'minute'];
