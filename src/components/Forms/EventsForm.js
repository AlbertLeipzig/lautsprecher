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
        <label htmlFor="name" required>
          Name
          <input type="text" name="name" id="name" />
        </label>
        <label htmlFor="description">
          Description
          <input type="text" name="description" id="description" />
        </label>
        <label htmlFor="start" required>
          Start
          <input type="date" name="start" id="start" />
        </label>
        <label htmlFor="end">
          End
          <input type="date" name="end" id="end" />
        </label>
        <label htmlFor="instruments">
          Bands
          <span>
            <input type="text" name="instruments" id="instruments" />
            <button>-</button>
            <button>+</button>
          </span>
        </label>
        <label htmlFor="tags">
          Musicians
          <span>
            <input type="text" name="musicians" id="musicians" />
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
        <label htmlFor="organizer" required>
          Organizer
          <input type="text" name="organizer" id="organizer" />
        </label>
        <label htmlFor="links">
          Links
          <span>
            <input type="text" name="links" id="links" />
            <button>-</button>
            <button>+</button>
          </span>
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
