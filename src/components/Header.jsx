import { Link } from 'react-router-dom';
export const Header = () => {
  return (
    <header>
      <>
        <Link to="/">
          <h2 className='header__title'>Lautsprecher</h2>
          <p>Musik Magazine der Stadt Leipzig</p>
        </Link>
      </>
      <div className="burger-menu">
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      <nav className="header-nav">
        <Link to="/events">Veranstaltungen</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Kontakt</Link>
      </nav>
    </header>
  );
};
