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
    console.log('formatted input : ', formattedInputDate);
    console.log('formatted event : ', formattedEventDate);
    formattedEventDate === formattedInputDate && filteredEvents.push(event);
  });
  console.log(filteredEvents);
};

export { filteredByDate };
