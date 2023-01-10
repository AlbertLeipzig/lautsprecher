import {
  convertDateStringFromInput,
  convertDateStringFromDb,
} from '../logic/formatDate';

import { filteredByDate } from './filteredByDate';
import { filteredByTag } from './filteredByTag';

// the front end gets an array of events from the back end

// this array can be filtered thru date and/or tag => thus

// callback function to filter BY DATE

// this must somehow take into consideration not only start time, but events that already started too, even if we don't the duration

/* const filteredByDate = (events, filter) => {
  let filteredEvents = [];
  events.forEach((event) => {
    const formattedEventDate = convertDateStringFromInput(
      event.date,
      event.time
    );

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
}; */

// callback function to filter BY TAG is in imported function filterByTag

const eventFilter = (events, filter) => {
  // if there's a date value, filter every event BY DATE

  const filteredByDateData = filter.date
    ? filteredByDate(events, filter)
    : events;

  // filter every filterByDate event BY TAG

  const filteredByTagData = filter.tag
    ? filteredByTag(events, filter)
    : events;

  const filteredEvents = events.includes(filteredByDateData).includes(filteredByTagData)

  return filteredEvents;
};

export { eventFilter };
