import {
  convertDateStringFromInput,
  convertDateStringFromDb,
} from '../logic/formatDate';

const filteredByDate = (events, filter) => {
  /* console.log('all events : ', events); */
  let filteredEvents = [];

  // FORMAT INPUT DATE
  const date = filter.date;
  const time = filter.time || [0, 0];
  const formattedInputDate = convertDateStringFromInput(date, time);

  events.forEach((event) => {
    const date = event.date;
    const time = event.time || [0, 0];
    const formattedEventDate = convertDateStringFromDb(date, time);
    /* formattedEventDate === formattedInputDate && console.log({"input date : ", formattedInputDate}); */
    formattedEventDate === formattedInputDate && filteredEvents.push(event);
  });
  return filteredEvents;
};

export { filteredByDate };
