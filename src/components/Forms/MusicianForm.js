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
        <label htmlFor="firstName" required>
          First Name
          <input type="text" name="firstName" id="firstName" />
        </label>
        <label htmlFor="lastName">
          Last Name
          <input type="text" name="lastName" id="lastName" />
        </label>
        <label htmlFor="instruments">
          Instruments
          <span>
            <input type="text" name="instruments" id ="instruments" />
            <button>-</button>
            <button>+</button>
          </span>
        </label>
        <label htmlFor="tags">
          Tags
          <span>
            <input type="text" name="tags" id="tags" />
            <button>-</button>
            <button>+</button>
          </span>
        </label>
        <label htmlFor="links">
          Links
          <span>
            <input type="text" name="links" id="links" />
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
          <input type="text" name="description" id="description" />
        </label>
        <label htmlFor="image">
          Image
          <input type="text" name="image" id="image" />
        </label>
        <button onClick={(e) => submitChanges(e)}>Submit Changes</button>
      </form>
    </div>
  );
};
