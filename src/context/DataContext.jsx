import { useState, createContext } from 'react';
export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [musicians, setMusicians] = useState([]);
  const [bands, setBands] = useState([]);
  const [venues, setVenues] = useState([]);
  const [events, setEvents] = useState([]);
  const [organizers, setOrganizers] = useState([]);
  const [musicBusiness, setMusicBusiness] = useState([]);

  return (
    <DataContext.Provider
      value={{
        musicians,
        setMusicians,
        bands,
        setBands,
        venues,
        setVenues,
        events,
        setEvents,
        organizers,
        setOrganizers,
        musicBusiness,
        setMusicBusiness,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
