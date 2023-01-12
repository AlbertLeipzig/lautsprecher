import { useEffect, useState, useContext } from 'react';
import { eventFilter } from '../logic/eventFilter';
import { DataContext } from '../context/DataContext';

// TEST

// DATA
/* 
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

const testFilter = { date: '2023-01-04', time: ['20', '20'], tag: '' };

export const test = eventFilter(initialEvents, testFilter);
console.log(test); */

const printEvents = (eventsArray) => {
  const data = eventsArray.data;
  data.forEach((event) => {
    console.log(event);
  });
};

export const Events = () => {
  const [filter, setFilter] = useState({ date: '', tag: '' });
  const { events, setEvents } = useContext(DataContext);
  const [filteredEvents, setFilteredEvents] = useState(events);

  // empty fields => filteredEvents.data

  useEffect(() => {
    fetch('http://localhost:5000/api/v1/events')
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, [filter]);

  useEffect(() => {
    /*  console.log('EVENTS : ', events);
    console.log('FILTER : ', typeof filter);
    console.log('VALUE OF DATE  : ', filter.date.valueOf()); */
    if (filter.date === '' && filter.tag === '') {
      setFilteredEvents(events.data);
    } else {
      setFilteredEvents(eventFilter(events, filter));
    }
  }, [filter]);

  filteredEvents &&
    filteredEvents.forEach((event) => console.log(event.organizer));

  {
    /* <div className="event" key={id}>
              <div className="event__main">
                <h2>{event.name}</h2>
                <div className="event__description">
                  {event.description && (
                    <p>{event.description.slice(0, 150)}</p>
                  )}
                </div>
              </div>
              <a
                href={event.eventLinks}
                target={'_blank'}
                className="event_link"
              >
                <img
                  src={
                    event.image ||
                    'https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bXVzaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
                  }
                  alt=""
                />
                <p>+info</p>
              </a>
            </div> */
  }

  return (
    <div className="events">
      <h1>Veranstaltungen</h1>

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

      <div className="events-container">
        {filteredEvents &&
          filteredEvents.map((concert) => <h1>{concert.name}</h1>)}
      </div>
    </div>
  );
};
