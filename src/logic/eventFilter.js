import { filteredByDate } from './filteredByDate';
import { filteredByTag } from './filteredByTag';

const eventFilter = (events, filter) => {
  let filteredEvents;
  filteredEvents = 'not yet';

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

  return filteredEvents;
};

export { eventFilter };
