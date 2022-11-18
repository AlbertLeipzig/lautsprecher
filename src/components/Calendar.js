import { useState } from 'react';

const today = new Date();
const firstDay = new Date(today.getFullYear(), today.getMonth(), 1).getDay();
const year = today.getFullYear();
const month = today.getMonth();
const day = today.getDate();
/* const rawWeekDay = today.getDay(); */
const freeDays = firstDay - 1;

console.log(firstDay);

function daysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}

export const Calendar = () => {
  const [days, setDays] = useState(30);
  return (
    <div className="calendar">
      {freeDays && [...Array(freeDays)].map((day, id) => <div key={id}></div>)}{' '}
      {[...Array(days)].map((_, i) => {
        return (
          <div className="calendar__day" key={i}>
            <p>{i + 1}</p>
          </div>
        );
      })}
    </div>
  );
};
