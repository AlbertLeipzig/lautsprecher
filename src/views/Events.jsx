import { useEffect, useState } from 'react';
import axios from 'axios';
import eventsData from '../data/eventsDb.json';

import { test } from '../logic/eventFilter';

test();

export const Events = () => {
  const [events, setEvents] = useState(undefined);
  const [filter, setFilter] = useState({ date: '', tag: '' });

  /*   const updateFilter = () => {};

  useEffect(() => {
    if (filter.value === '') {
      updateFilter(eventsData);
    } else if (filter.type === 'date') {
      updateFilter(filter.value);
    } else if (filter.type === 'word') {
      updateFilter(filter.value);
    } else {
      updateFilter(eventsData);
    }
  }, [filter]); */

  useEffect(() => {
    fetch('http://localhost:5000/api/v1/events')
      .then((res) => res.json())
      .then((data) => console.log(data.data));
  }, []);

  return (
    <div className="events">
      <h1>Veranstaltungen</h1>
      {filter && <h1>{filter.date}</h1>}

      <div className="event__filter">
        <label htmlFor="event__filter">
          <input
            type="text"
            placeholder="event..."
            onChange={(e) => {
              setFilter({ tag: e.target.value });
            }}
          />
        </label>
        <label htmlFor="">
          <input
            type="date"
            onChange={(e) => setFilter({ date: e.target.value })}
          />
        </label>
      </div>

      {/* <div className="events-container">

        {events?.data.map((event, id) => (
          <div className="event" key={id}>
            <div className="event__main">
              <h2>{event.name}</h2>
              <div className="event__description">
                {event.description && <p>{event.description.slice(0, 150)}</p>}
              </div>
            </div>
            <a href={event.eventLinks} target={'_blank'} className="event_link">
              <img
                src={
                  event.image ||
                  'https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bXVzaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
                }
                alt=""
              />
              <p>+info</p>
            </a>
          </div>
        ))}
      </div> */}
    </div>
  );
};
