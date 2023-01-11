import {
  convertDateStringFromInput,
  convertDateStringFromDb,
} from '../logic/formatDate';
import { Events } from '../views/Events';

import { filteredByDate } from './filteredByDate';
import { filteredByTag } from './filteredByTag';

const eventFilter = (events, filter) => {
  let filteredEvents;
  filteredEvents = 'not yet';
  let tagEvents;
  let dateEvents;

  const eventsArray = events?.data;

  const completeFilterEvent = () => {
    const eventByDate = filteredByDate(eventsArray, filter);
    const eventByTag = filteredByTag(eventByDate, filter);
    return eventByTag;
  };

  if (filter.date && filter.tag) {
    filteredEvents = completeFilterEvent();
  } else if (filter.date) {
    eventsArray && (filteredEvents = filteredByDate(eventsArray, filter));
  } else if (filter.tag) {
    eventsArray && (filteredEvents = filteredByTag(eventsArray, filter));
  } else {
    filteredEvents = events;
  }

  /* tagEvents && dateEvents && (filteredEvents = 'both events');
  tagEvents && (filteredEvents = 'tag events');
  dateEvents && (filteredEvents = 'date events'); */

  // if only tagEvents

  // filteredEvents = tagEvents

  // if only dateEvents

  // filteredEvents = dateEvents

  // if both

  // filteredEvents = eventComparisson

  /*   console.log('tagEvents : ', tagEvents);
  console.log('dateEvents : ', dateEvents); */
  console.log(filteredEvents);
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
