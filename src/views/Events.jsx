import { useEffect, useState } from 'react';
import eventsData from '../data/events.json';
import { Calendar } from '../components/Calendar';

const allEvents = eventsData.events;
let filteredEvents = [];

// EVENT FILTERS

// filter by date

// format date into YYYY-MM-DD
const formatStartDate = (eventStart) => {
  const es = eventStart;
  const date = `${es[(0, 0)]}/${es[(0, 1)]}/${es[(0, 2)]}, ${es[(1, 0)]}:${
    es[(1, 1)]
  }`;
  return date;
};

// convert the string from the input into variables

const formatInputDate = (date) => {
  const day = date.slice(8, 10);
  const month = date.slice(5, 7);
  const year = date.slice(0, 4);
  return { day, month, year };
};

console.log(formatInputDate('2021-09-01'));

const filterByDate = (events, date) => {
  const filteredEvents = events.filter((event) => {
    const eventDate = formatStartDate(event.start);
    return eventDate === date;
  });
};

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

// Filter All Events

const filterAllEvents = (eventArray, filterWords) => {
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
  const [filter, setFilter] = useState('');
  const [date, setDate] = useState('');
  const filteredEvents = [];
  console.log(typeof date);

  useEffect(() => {
    allEvents.forEach((event, i) => {
      const tags = eventTags(event);
      tags.forEach((tag) => {
        return tag === filter ? filteredEvents.push(event) : null;
      });
      filterAllEvents(allEvents, filter);
      console.log('filteredEvents: ', filteredEvents);
      setEvents(filteredEvents);
    });
  }, [filter]);

  return (
    <>
      <h1>Veranstaltungen</h1>
      {/* <Calendar /> */}
      <>
        {/* <h1>{title}</h1> */}
        <label htmlFor="event__filter">
          <input
            type="text"
            placeholder="event..."
            onChange={(e) => {
              setFilter(e.target.value);
            }}
          />
          <label htmlFor="">
            <input
              type="date"
              onChange={(e) => formatInputDate(e.target.value)}
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
              {/* {event.musicians &&
                event.musicians.map((musician, id) => (
                  <p key={musician.id}>{musician.id}</p>
                ))} */}
              {event.tags && (
                <ul>
                  {event.tags.map((tag, id) => (
                    <ul key={id}>{tag.id}</ul>
                  ))}
                </ul>
              )}
              <p>{event.organizerId}</p>
              {/* {event.eventLinks && event.eventLinks.map((link, id) => (
              ))} */}
              {/* {event.eventLinks &&
                event.eventLinks.map((eventLink, id) => (
                  <p key={id}>{eventLink.id}</p>
                ))} */}
              <a href={event.eventLinks} target={'_blank'}>
                +info
              </a>
              {/*  <p>{formatStartDate(event.start)}</p> */}
            </div>
          ))}
      </div>
    </>
  );
};
