import { Routes, Route } from 'react-router-dom';
import { About } from './views/About';
import { Contact } from './views/Contact';
import { Events } from './views/Events';
import { Impressum } from './views/Impressum';
import { LandingPage } from './views/LandingPage';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/events" element={<Events />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/impressum" element={<Impressum />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
