import { useState } from 'react';
import eventsData from '../data/events.json';
import { Calendar } from '../components/Calendar';

const formatStartDate = (eventStart) => {
  const es = eventStart;
  const date = `${es[(0, 0)]}/${es[(0, 1)]}/${es[(0, 2)]}, ${es[(1, 0)]}:${
    es[(1, 1)]
  }`;
  return date;
};

// EVENT FILTERS

// filter by date

const filterByDate = (events, date) => {
  const filteredEvents = events.filter((event) => {
    const eventDate = formatStartDate(event.start);
    return eventDate === date;
  });
  return filteredEvents;
};

// tags array

const eventTags = (event) => {
  let tagsArray = [];
  tagsArray.push(event.name);
  tagsArray.push(event.venueId);

  // test if event has musicians. If truthy, test if musician is a string or an array. Then pushes values to array.

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
  /* console.log(tagsArray); */
  return tagsArray;
};

// filter by tag

/* const userInput = eventsData.events[2].musicians; */
const userInput = 'DESPISED ICON & DECAPITATED';
const eventArray = eventsData.events;

// Filter All Events

const filterAllEvents = (eventArray, filterWords) => {
  let filteredEvents = [];

  eventArray.forEach((event) => {
    const tags = eventTags(event);
    console.log(tags);
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

filterAllEvents(eventArray, userInput);

const testInput = (input) => {
  console.log(input);
};

export const Events = () => {
  const [events, setEvents] = useState(
    filterAllEvents(eventArray, 'Open Stage')
  );
  const [title, setTitle] = useState('hello');

  const updateEvents = (userInput) => {
    setEvents(filterAllEvents('Open Stage'));
    console.log(userInput);
  };

  return (
    <>
      <h1>Veranstaltungen</h1>

      <Calendar />
      <>
        <label htmlFor="event">
          <input
            type="text"
            placeholder="event..."
            onChange={(e) => {
              updateEvents(e.target.value);
            }}
          />
        </label>
        <h1>{title}</h1>
      </>

      <div className="events-container">
        {eventArray &&
          eventArray.map((event, id) => (
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
