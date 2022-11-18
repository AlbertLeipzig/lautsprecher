const today = new Date();
const year = today.getFullYear();
const month = today.getMonth();
const day = today.getDate();
const rawWeekDay = today.getDay();
const freeDays = rawWeekDay - 1;

function daysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}


/* 
const weekDay = () => {
  switch (rawWeekDay) {
    case 0:
      return 'Sonntag';
    case 1:
      return 'Montag';
    case 2:
      return 'Dienstag';
    case 3:
      return 'Mittwoch';
    case 4:
      return 'Donnerstag';
    case 5:
      return 'Freitag';
    case 6:
      return 'Samstag';
    default:
      return 'Fehler';
  }
};
 */
