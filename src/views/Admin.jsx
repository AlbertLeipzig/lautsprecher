import { useEffect } from 'react';
import { useState } from 'react';

import bandsData from '../data/bandsDb.json';
import eventsData from '../data/eventsDb.json';
import musicBusinessData from '../data/musicBusinessDb.json';
import musiciansData from '../data/musiciansDb.json';
import organizersData from '../data/organizersDb.json';
import venuesData from '../data/venuesDb.json';

const data = {
  bandsData,
  eventsData,
  musicBusinessData,
  musiciansData,
  organizersData,
  venuesData,
};

export const Admin = () => {
  const [activeCategory, setActiveCategory] = useState([]);
  const [selector, setSelector] = useState('musicians');

  /* const selectData = (selector) => {
    let targetCategory = Object.entries(data).forEach((category) => {
      console.log(category[0].slice(0, -4) === selector ? category[1] : '');
    });
  }; */

  useEffect(() => {
    Object.entries(data).forEach((category) => {
      setActiveCategory(
        category[0].slice(0, -4) === selector ? category[1] : ''
      );
    });
    console.log(activeCategory);
  }, [activeCategory, selector]);

  return (
    <div className="admin">
      <h1>Admin</h1>
      <div className="admin__controlers">
        <select
          name=""
          id=""
          defaultValue={'musicians'}
          onChange={(e) => setSelector(e.target.value)}
        >
          <option value="musicBusiness">Musikgeschäfte</option>
          <option value="musicians">Musiker</option>
          <option value="bands">Bands</option>
          <option value="organizers">Veranstalter</option>
          <option value="events">Veranstaltugen</option>
          <option value="venues">Veranstaltungsorte</option>
        </select>
        <label htmlFor="">
          {' '}
          Find...
          <input type="text" />
        </label>
      </div>
      {/* <div className="admin__list">
        {activeCategory &&
          activeCategory.map((item, index) => {
            <>
              return (
              <div className="admin__list__item" key={index}>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </div>
              );
            </>;
          })}
      </div> */}
    </div>
  );
};
