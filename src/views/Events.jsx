import eventsData from '../data/events.json';

const events = eventsData.events;

const formatStartDate = (eventStart) => {
  const es = eventStart;
  const date = `${es[(0, 0)]}/${es[(0, 1)]}/${es[(0, 2)]}, ${es[(1, 0)]}:${
    es[(1, 1)]
  }`;
  return date;
};

export const Events = () => {
  return (
    <div className="calendar">
      <h1>Veranstaltungen</h1>
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
    </div>
  );
};
