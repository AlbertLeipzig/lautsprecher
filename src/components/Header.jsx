import {Link} from 'react-router-dom';
export const Header = () => {
  return (
    <header>
      <>
        <h1>Lautsprecher</h1>
        <p>Musik Magazine der Stadt Leipzig</p>
      </>
      <div className="burger-menu">
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      <nav className="header-nav">
        <Link to ="/events">Veranstaltungen</Link>
        <Link to ="/about">About</Link>
        <Link to ="/contact">Kontakt</Link>
      </nav>
    </header>
  );
};
