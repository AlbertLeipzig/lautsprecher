import { useState, useContext } from 'react';

export const MusicianForm = (props) => {
  const info = props.entryInfo;
  const formType = props.formType;
  const [newInfo, setNewInfo] = useState([]);
  const [fields, setFields] = useState([]);

  const submitChanges = (e) => {
    e.preventDefault();
    console.log('submitChanges');
  };

  return (
    <div>
      <form className="edit__form">
        <label htmlFor="name">
          Name
          <input type="text" name="name" id="name" required />
        </label>
        <label htmlFor="musicians">
          Musicians
          <span>
            <input type="text" />
            <button>-</button>
            <button>+</button>
          </span>
        </label>
        <label htmlFor="tags">
          Tags
          <span>
            <input type="text" />
            <button>-</button>
            <button>+</button>
          </span>
        </label>
        <label htmlFor="links">
          Links
          <span>
            <input type="text" />
            <button>-</button>
            <button>+</button>
          </span>
        </label>
        <label htmlFor="concerts">
          Concerts
          {info.concerts &&
            info.concerts.forEach((concert) => {
              <>
                <a href={concert.link}>{concert.name}</a>;
              </>;
            })}
        </label>
        <label htmlFor="description">
          Description
          <input type="text" />
        </label>
        <label htmlFor="image">
          Image
          <input type="text" />
        </label>
        <button onClick={(e) => submitChanges(e)}>Submit Changes</button>
      </form>
    </div>
  );
};
