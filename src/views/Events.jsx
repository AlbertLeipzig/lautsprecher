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
  // console.log('SELECTED DATE IS : ', [day, month, year]);
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

const filterEventsByDate = (events, date) => {
  const filteredEvents = [];
  events.forEach((event) => {
    const filteredEvent = compareDates(event, date);
    if (filteredEvent !== undefined) {
      filteredEvents.push(event);
    }
  });
  return filteredEvents;
};

console.log(filterEventsByDate(allEvents, '2022-11-15'));

// EVENT FILTERS

// filter by date

// make a tags array for each event, so you can compare it to the filter words

const eventTags = (event) => {
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

// filter by tag

const filterByTag = (eventArray, filterWords) => {
  eventArray.forEach((event) => {
    const tags = eventTags(event);
    tags.forEach((tag) => {
      if (filterWords.includes(tag)) {
        filteredEvents.push(event);
      }
    });
  });

  return filteredEvents;
};

export const Events = () => {
  const [events, setEvents] = useState(undefined);
  const [filter, setFilter] = useState({});
  const filteredEvents = [];

  useEffect(() => {
    if (filter.type === 'date') {
      setEvents(filterEventsByDate(allEvents, filter.value));
    }
    /*  if ((filter.type = 'date')) {
      filterByDate(allEvents, filter.value);
    } else if ((filter.type = 'tag')) {
      filterByTag(allEvents, filter.value);
    } else {
      setEvents(allEvents);
    } */
  }, [filter]);

  return (
    <>
      <h1>Veranstaltungen</h1>
      <>
        <label htmlFor="event__filter">
          <input
            type="text"
            placeholder="event..."
            onChange={(e) => {
              setFilter({type : "tag", value : e.target.value});
            }}
          />
          <label htmlFor="">
            <input
              type="date"
              onChange={(e) => setFilter({type : "date", value : e.target.value})}
            />
          </label>
        </label>
      </>

      <div className="events-container">
        {events &&
          events.map((event, id) => (
            <div className="event" key={id}>
              <h2>{event.name}</h2>
              <p>{event.description.slice(0, 200)}</p>
              <p>{event.venueId}</p>
              {event.bandId && (
                <ul>
                  {event.bandId.map((band, id) => (
                    <li key={id}>{band.id}</li>
                  ))}
                </ul>
              )}
              {event.tags && (
                <ul>
                  {event.tags.map((tag, id) => (
                    <ul key={id}>{tag.id}</ul>
                  ))}
                </ul>
              )}
              <p>{event.organizerId}</p>
              <a href={event.eventLinks} target={'_blank'}>
                +info
              </a>
            </div>
          ))}
      </div>
    </>
  );
};
