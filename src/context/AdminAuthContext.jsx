import { useState, createContext } from 'react';
export const AdminAuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [activeUser, setActiveUser] = useState(null);
  return (
    <AdminAuthContext.Provider value={{ activeUser, setActiveUser }}>
      {children}
    </AdminAuthContext.Provider>
  );
};
