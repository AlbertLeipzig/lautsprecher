import {
  convertDateStringFromInput,
  convertDateStringFromDb,
} from '../logic/formatDate';

// the front end gets an array of events from the back end

const initialEvents = [
  {
    name: 'first event',
    date: '2023-01-03',
    time: ['20', '50'],
    tags: ['jazz'],
  },
  {
    name: 'second event',
    date: '2023-01-03',
    time: ['20', '30'],
    tags: ['funk', 'metal'],
  },
  {
    name: 'third event',
    date: '2023-01-03',
    time: ['20', '30'],
    tags: ['funk', 'gospel'],
  },
  {
    name: 'fourth event',
    date: '2023-01-04',
    time: ['20', '20'],
    tags: ['folk'],
  },
];

let filteredEvents = [];

// this array can be filtered thru date and/or tag => thus

// callback function to filter BY DATE

const filteredByDate = (events, filter) => {
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
};

// callback function to filter BY TAG

const filteredByTag = (events, filter) => {
  let filteredEvents = [];
  events.forEach((event) => {
    event.tags.forEach((tag) => {
      tag === filter.tag && filteredEvents.push(event);
    });
  });
  return filteredEvents;
};

const filterEvents = (events, filter) => {
  // if there's a date value, filter every event BY DATE

  const filteredByDateData = filter.date
    ? filteredByDate(events, filter)
    : events;

  // filter every filterByDate event BY TAG

  const filteredByTagData = filter.tag
    ? filteredByTag(filteredByDateData, filter)
    : filteredByDateData;

  console.log(filteredByTagData);
};

const testFilter = { date: '2023-01-03', time: ['20', '30'], tag: '' };

export const test = filterEvents(initialEvents, testFilter);

// the user can have 0, 1 or 2 filters

// filter evey event by tag
