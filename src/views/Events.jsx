import { useEffect, useState, useContext } from 'react';
import { eventFilter } from '../logic/eventFilter';
import { DataContext } from '../context/DataContext';
import { EventCard } from '../components/EventCard';

export const Events = () => {
  const [filter, setFilter] = useState({ date: '', tag: '' });
  const { events, setEvents } = useContext(DataContext);
  const [singleEvent, setSingleEvent] = useState({});
  const [filteredEvents, setFilteredEvents] = useState(events);

  /* fetch data from api */

  useEffect(() => {
    fetch('http://localhost:5000/api/v1/events')
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);

  /* filter events */

  useEffect(() => {
    if (filter.date === '' && filter.tag === '') {
      setFilteredEvents(events.data);
      setSingleEvent(filteredEvents[0]);
    } else {
      setFilteredEvents(eventFilter(events, filter));
      setSingleEvent(filteredEvents[0]);
    }
  }, [filter]);

  /*  filteredEvents && for (const entry of filteredEvents) {
    console.log(entry);
  } */

  /* {filteredEvents &&
    Object.values(filteredEvents).forEach((value) => (
      <>
        <p>test</p>
        <p>test</p>
      </>
    ))} */

  singleEvent && console.log('SINGLE EVENT : ', singleEvent);

  return (
    <div className="events">
      <h1>Veranstaltungen</h1>
      <h2 className="events__crash">
        Uns tut es Leid, derzeit ist keine Veranstaltung vorhanden
      </h2>
      {/* {filteredEvents === undefined && (
      )} */}
      {filteredEvents && (
        <div className="event__filter">
          <label htmlFor="event__filter">
            <input
              type="text"
              placeholder="event..."
              onChange={(e) => {
                setFilter({ tag: e.target.value, date: filter.date });
              }}
            />
          </label>
          <label htmlFor="">
            <input
              type="date"
              onChange={(e) =>
                setFilter({ date: e.target.value, tag: filter.tag })
              }
            />
          </label>
        </div>
      )}
      <div className="events-container">
        {filteredEvents &&
          Object.values(filteredEvents).forEach((value) => (
            <EventCard event={value} />
          ))}
      </div>
    </div>
  );
};
