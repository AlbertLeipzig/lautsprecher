const filteredByTag = (events, filter) => {
  let filteredEvents = [];

  const listEventWords = (document) => {
    let eventWords = [];
    eventWords.push(document.name);
    eventWords.push(document.firstName);
    eventWords.push(document.lastName);
    eventWords.push(document.location);
    document.tags.forEach((tag) => {
      eventWords.push(tag);
    });
    return eventWords;
  };

  events.forEach((event) => {
    const words = listEventWords(event);
    words.forEach((word) => {
      word === filter.tag && filteredEvents.push(event);
    });
  });
  return filteredEvents;
};

export { filteredByTag };
