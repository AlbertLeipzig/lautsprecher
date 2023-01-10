- clean events.jsx

- date must somehow take into consideration not only start time, but events that already started too, even if we don't the duration

\*\* actual filter => filter.date === eventDate.startTime

\*\* target filter => filter.date >= eventDate.startTime || filter.date <= eventDate.endTime

- fetched data in a Context and is available as soon as the user lands in event page

- what happens if there's no answer from database? implement a message

b) UI polish
