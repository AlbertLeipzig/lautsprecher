// filter every event by date

const filterEventsByDate = (date) => {
    const filteredEvents = [];
    allEvents.forEach((event) => {
      const filteredEvent = compareDates(event, date);
      if (filteredEvent !== undefined) {
        filteredEvents.push(event);
      }
    });
    return filteredEvents;
  };
  
  // EVENT FILTERS
  
  // filter by date
  
  // compare one event's tags array with the filter word
  // make a tags array for each event, so you can compare it to the filter words
  
  const getEventTags = (event) => {
    let tagsArray = [];
    tagsArray.push(event.name);
    tagsArray.push(event.venueId);
  
    // test if event has musicians/bands/tags. If truthy, test if the value is a string or an array. Then pushes values to an events array.
  
    const addTags = (tagCategory) => {
      if (tagCategory) {
        if (tagCategory.includes('')) {
          tagsArray.push(tagCategory);
        } else {
          tagCategory.forEach((tag) => {
            tagsArray.push(tag);
          });
        }
      }
    };
  
    addTags(event.musicians);
    addTags(event.bandId);
    addTags(event.tags);
    return tagsArray;
  };
  
  // compare all events' tags array with the filter word
  
  const filterEventsByTag = (filter) => {
    const filteredEvents = [];
    allEvents.forEach((event) => {
      const filterSingleEvent = getEventTags(event);
      if (filterSingleEvent.includes(filter)) {
        filteredEvents.push(event);
      }
    });
    return filteredEvents;
  };
  