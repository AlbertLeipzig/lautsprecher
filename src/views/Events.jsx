import { useEffect, useState, useContext } from 'react';
import { eventFilter } from '../logic/eventFilter';
import { DataContext } from '../context/DataContext';
import { EventCard } from '../components/EventCard';
import axios from 'axios';
export const Events = () => {
  const [filter, setFilter] = useState({ date: '', tag: '' });
  const { events, setEvents } = useContext(DataContext);
  const [singleEvent, setSingleEvent] = useState({});
  const [filteredEvents, setFilteredEvents] = useState(events);

  /* fetch data from api */

  useEffect(() => {
    axios('http://localhost/api/v1/events')
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  /* filter events */

  useEffect(() => {
    if (filter.date === '' && filter.tag === '') {
      setFilteredEvents(events.data);
      /* setSingleEvent(filteredEvents[0]); */
    } else if (filter.date || filter.tag) {
      setFilteredEvents(eventFilter(events, filter));
      /* setSingleEvent(filteredEvents[0]); */
    } else {
      setFilteredEvents(events.data);
    }
  }, [filter]);

  filteredEvents && console.log(filteredEvents);

  /* singleEvent && console.log('SINGLE EVENT : ', singleEvent); */

  return (
    <div className="events">
      <h1>Veranstaltungen</h1>

      {filteredEvents === undefined && (
        <div className="events__nodb">
          <img
            src="https://images.unsplash.com/photo-1617405207340-954e2e19755c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZW1wdHklMjBjb25jZXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
            alt=""
          />
          <h2 className="events__crash">
            Uns tut es Leid, derzeit ist keine Veranstaltung vorhanden. Kommt
            bitte auf eine späteren Zeitpunkt zurück. Wir freuen uns auf Dich!
          </h2>
          {/* {filteredEvents && (
        <>
        <p>Bei Lautsprecher bemühen wir uns, Ihnen möglichst aktuelle Informationen zur Verfügung zu stellen. Dennoch sind wir im Moment nicht in der Lage, dafür zu sorgen, dass sich nichts ändert. Lautsprecher übernimmt daher keine Verantwortung für Änderungen in letzter Minute. Bitte beachten Sie den Link zur Veranstaltung für weitere Informationen und Bestätigung. Vielen Dank!</p>
        </>
      )} */}
        </div>
      )}
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
