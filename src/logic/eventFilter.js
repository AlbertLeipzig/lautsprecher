import {
  convertDateStringFromInput,
  convertDateStringFromDb,
} from '../logic/formatDate';

// the front end gets an array of events from the back end

const initialEvents = '';

let filteredEvents = [];

// this array can be filtered thru date and/or tag => thus

// the user can have 0, 1 or 2 filters

// filter every event by date

// filter evey event by tag

let filter = ['', 'formatted date (view formatDate.js)'];

export const test = () => {
  /* (convertDateStringFromInput('2023-01-03', ['20, 30'])); */
  console.log(convertDateStringFromInput('2023-01-03', ['20, 30']));
};
