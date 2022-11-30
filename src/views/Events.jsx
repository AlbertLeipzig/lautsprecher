import { useEffect, useState } from 'react';
import eventsData from '../data/events.json';

const allEvents = eventsData.events;
let filteredEvents = [];

// FORMAT INPUT DATE

// format date into YYYY-MM-DD

const formatStartDate = (eventStart) => {
  const es = eventStart;
  const date = `${es[(0, 0)]}/${es[(0, 1)]}/${es[(0, 2)]}, ${es[(1, 0)]}:${
    es[(1, 1)]
  }`;
  return date;
};

// convert the date string from the input into variables

const formatInputDate = (date) => {
  const day = parseInt(date.slice(8, 10));
  const month = parseInt(date.slice(5, 7));
  const year = parseInt(date.slice(0, 4));
  return [day, month, year];
};

// brings date for an specific event

const getEventDate = (event) => {
  return event.start[0];
};

// compares the date of the event with the date of the input

const compareDates = (event, inputDate) => {
  const selectedDate = formatInputDate(inputDate);
  const eventDate = getEventDate(event);
  if (selectedDate[2] === eventDate[2]) {
    if (selectedDate[1] === eventDate[1]) {
      if (selectedDate[0] === eventDate[0]) {
        return event;
      }
    }
  }
};

// filter every event by date

const filterEventsByDate = (date) => {
  const filteredEvents = [];
  allEvents.forEach((event) => {
    const filteredEvent = compareDates(event, date);
    if (filteredEvent !== undefined) {
      filteredEvents.push(event);
    }
  });
  return filteredEvents;
};

// EVENT FILTERS

// filter by date

// compare one event's tags array with the filter word
// make a tags array for each event, so you can compare it to the filter words

const getEventTags = (event) => {
  let tagsArray = [];
  tagsArray.push(event.name);
  tagsArray.push(event.venueId);

  // test if event has musicians/bands/tags. If truthy, test if the value is a string or an array. Then pushes values to an events array.

  const addTags = (tagCategory) => {
    if (tagCategory) {
      if (tagCategory.includes('')) {
        tagsArray.push(tagCategory);
      } else {
        tagCategory.forEach((tag) => {
          tagsArray.push(tag);
        });
      }
    }
  };

  addTags(event.musicians);
  addTags(event.bandId);
  addTags(event.tags);
  return tagsArray;
};

// compare all events' tags array with the filter word

const filterEventsByTag = (filter) => {
  const filteredEvents = [];
  allEvents.forEach((event) => {
    const filterSingleEvent = getEventTags(event);
    if (filterSingleEvent.includes(filter)) {
      filteredEvents.push(event);
    }
  });
  return filteredEvents;
};

const formattedWeekDay = (day) => {
  switch (day) {
    case 0:
      return 'Sonntag';
    case 1:
      return 'Montag';
    case 2:
      return 'Dienstag';
    case 3:
      return 'Mittwoch';
    case 4:
      return 'Donnerstag';
    case 5:
      return 'Freitag';
    case 6:
      return 'Samstag';
    default:
      return '';
  }
};

const formattedMonth = (month) => {
  if (month === 1) {
    return 'Januar';
  } else if (month === 2) {
    return 'Februar';
  } else if (month === 3) {
    return 'März';
  } else if (month === 4) {
    return 'April';
  } else if (month === 5) {
    return 'Mai';
  } else if (month === 6) {
    return 'Juni';
  } else if (month === 7) {
    return 'Juli';
  } else if (month === 8) {
    return 'August';
  } else if (month === 9) {
    return 'September';
  } else if (month === 10) {
    return 'Oktober';
  } else if (month === 11) {
    return 'November';
  } else {
    return 'Dezember';
  }
};

const formattedDay = (_day) => {
  console.log(_day);
  const day = _day === undefined ? new Date() : _day;
  return `Heute, ${formattedWeekDay(
    day.getDay()
  )} ${day.getDate()}. ${formattedMonth(day)} ${day.getFullYear()}`;
};

export const Events = () => {
  const [events, setEvents] = useState(undefined);
  const [filter, setFilter] = useState({});
  const [date, setDate] = useState(formattedDay());
  useEffect(() => {
    if (filter.value === '') {
      setEvents(allEvents);
    } else if (filter.type === 'date') {
      /* setDate(filter.value); */
      setEvents(filterEventsByDate(filter.value));
    } else if (filter.type === 'tag') {
      setEvents(filterEventsByTag(filter.value));
    } else {
      setEvents(allEvents);
    }
  }, [filter]);

  return (
    <>
      <h1>Veranstaltungen</h1>
      <div className="event__filter">
        <label htmlFor="event__filter">
          <input
            type="text"
            placeholder="event..."
            onChange={(e) => {
              setFilter({ type: 'tag', value: e.target.value });
            }}
          />
        </label>
        <label htmlFor="">
          <input
            type="date"
            onChange={(e) => setFilter({ type: 'date', value: e.target.value })}
          />
        </label>
      </div>

      <div className="events-container">
        {/* {date && <h2>{date}</h2>} */}
        {events &&
          events.map((event, id) => (
            <div className="event" key={id}>
              <div className="event__main">
                <h2>{event.name}</h2>
                <a href={event.eventLinks} target={'_blank'}>
                  +info
                </a>
              </div>
              <div className="event__description">
                {event.description && <p>{event.description.slice(0, 150)}</p>}
              </div>
              <div className="event__add-info">
                <p>{event.venueId}</p>
                {event.bandId && (
                  <ul>
                    {event.bandId.map((band, id) => (
                      <li key={id}>{band.id}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
      </div>
    </>
  );
};
