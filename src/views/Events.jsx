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
      // console.log(tag);
      if (filterWords.includes(tag)) {
        filteredEvents.push(event);
      }
    });
  });
  console.log(filteredEvents);
  return filteredEvents;
};

// TEST
const eventArray = allEvents;

// console.log('START', filterAllEvents(eventArray, userInput), 'END');

export const Events = () => {
  const [events, setEvents] = useState('');
  useEffect(() => {
    filterAllEvents(eventArray, '');
    setEvents(allEvents);
  }, []);

  const updateEvents = (userInput) => {
    console.log(userInput);
    setEvents(filterAllEvents(allEvents, userInput));
  };

  const [title, setTitle] = useState('Events');

  return (
    <>
      <h1>Veranstaltungen</h1>

      <Calendar />
      <>
        <h1>{title}</h1>
        <label htmlFor="event">
          <input
            type="text"
            placeholder="event..."
            onChange={(e) => {
              updateEvents(e.target.value);
            }}
          />
        </label>
      </>

      <div className="events-container">
        {events &&
          events.map((event, id) => (
            <div className="event" key={id}>
              <h2>{event.name}</h2>
              <p>{event.description}</p>
              <p>{event.venueId}</p>
              {event.bandId &&
                event.bandId.map((band, id) => <p key={id}>{band.id}</p>)}
              {/* {event.musicians &&
                event.musicians.map((musician, id) => (
                  <p key={musician.id}>{musician.id}</p>
                ))} */}
              {event.tags &&
                event.tags.map((tag, id) => <p key={id}>{tag.id}</p>)}
              <p>{event.organizerId}</p>
              {/* {event.eventLinks && event.eventLinks.map((link, id) => (
                console.log(link)
              ))} */}
              {/* {console.log(event.eventLinks)} */}
              {/* {event.eventLinks &&
                event.eventLinks.map((eventLink, id) => (
                  <p key={id}>{eventLink.id}</p>
                ))} */}
              <p>{event.eventLinks}</p>
              {/*  <p>{formatStartDate(event.start)}</p> */}
            </div>
          ))}
      </div>
    </>
  );
};
