import { useEffect, useContext } from 'react';
import { DataContext } from '../context/DataContext';

export const LandingPage = () => {
  const { setEvents } = useContext(DataContext);
  useEffect(() => {
    fetch('http://localhost:5000/api/v1/events')
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);
  return (
    <div className="landing-page">
      <h1>Landing Page</h1>
    </div>
  );
};
