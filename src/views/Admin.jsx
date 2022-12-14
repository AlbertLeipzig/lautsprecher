import { useEffect } from 'react';
import { useState, useContext } from 'react';

<>
// musicians
// bands
// events
// venues
// organizer
// musicBusiness
</>

export const Admin = () => {
  const [activeCategory, setActiveCategory] = useState([]);

  return (
    <div className="admin">
      <h1>Admin</h1>
      <div className="admin__controlers">
        <select
          name=""
          id=""
          defaultValue={'musicians'}
          onChange={(e) => setActiveCategory(e.target.value)}
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
      <div className="admin__list">
        {/* {activeCategory &&
          activeCategory.map((item, index) => {
            <>
              return (
              <div className="admin__item" key={index}>
                <div className="admin__item__name">{item.name}</div>
                <div className="admin__item__actions">
                  <button className="admin__item__action">Bearbeiten</button>
                  <button className="admin__item__action">Löschen</button>
                </div>
              </div>
              );
            </>;
          })} */}
      </div>
    </div>
  );
};
