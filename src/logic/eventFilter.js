import {
  convertDateStringFromInput,
  convertDateStringFromDb,
} from '../logic/formatDate';
import { Events } from '../views/Events';

import { filteredByDate } from './filteredByDate';
import { filteredByTag } from './filteredByTag';

const eventFilter = (events, filter) => {
  let filteredEvents = [];

  const eventsArray = events?.data;

  eventsArray &&
    filter.tag &&
    console.log('FILTERED BY TAG', filteredByTag(eventsArray, filter));

  /* eventsArray &&
    filter.date &&
    console.log(filteredByDate('FILTERED BY DATE', eventsArray, filter)); */

  return filteredEvents;
};

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

export { eventFilter };
