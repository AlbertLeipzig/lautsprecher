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

  return tagsArray;
};

// filter by tag

const filterWords = ['OpenStage'];
const eventArray = eventsData.events;
const testEvent = eventArray[0];

// Filter Single Event

const filterSingleEvent = (tagsArray, filterWord) => {
  const tags = eventTags(tagsArray);
  // console.log(filterWord);
  filterWord.forEach((word) => {
    if (tags.includes(word)) {
      // console.log('match');
      return true;
    }
  });
};

// Filter All Events

const filterAllEvents = (eventArray, filterWord) => {
  let filteredEvents = [];
  eventArray.forEach((event) => {
    filterSingleEvent(event, filterWord);
    filterSingleEvent === true ? filteredEvents.push(event) : null;
  });
  console.log(filteredEvents);
};

filterAllEvents(eventArray, filterWords);

export const Events = () => {
  return (
    <>
      <h1>Veranstaltungen</h1>

      <Calendar />
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
