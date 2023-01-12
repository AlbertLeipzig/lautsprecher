import { createContext, useState } from 'react';

export const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [events, setEvents] = useState([]);
  return (
    <DataContext.Provider value={{ events, setEvents }}>
      {children}
    </DataContext.Provider>
  );
};
