import { useContext } from 'react';
import { DataContext } from './context/DataContext';
import { Routes, Route } from 'react-router-dom';
import { About } from './views/About';
import { Contact } from './views/Contact';
import { Events } from './views/Events';
import { Impressum } from './views/Impressum';
import { LandingPage } from './views/LandingPage';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Login } from './views/Login';
import { Admin } from './views/Admin';
import { Test } from './views/Test';
import './scss/main.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <DataContext.Provider value="events, setEvents">
        <main>
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route path="/events" element={<Events />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/test" element={<Test />} />
          </Routes>
        </main>
      </DataContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
