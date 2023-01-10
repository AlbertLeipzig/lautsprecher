import {
  convertDateStringFromInput,
  convertDateStringFromDb,
} from '../logic/formatDate';

const filteredByDate = (events, filter) => {
  let filteredEvents = [];
  events.forEach((event) => {
    const formattedEventDate = convertDateStringFromDb(event.date, event.time);

    const formattedInputDate = convertDateStringFromInput(
      filter.date,
      filter.time
    );

    const eventsFilter = () =>
      formattedEventDate.toString() === formattedInputDate.toString() &&
      filteredEvents.push(event);
    eventsFilter();
  });
  return filteredEvents;
};

export { filteredByDate };
