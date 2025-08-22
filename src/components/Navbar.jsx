
import { useState, useEffect } from 'react';
import { FaHome } from "react-icons/fa";
import { MdPerson3 } from "react-icons/md";
import { GrCertificate } from "react-icons/gr";
import { MdContactPhone } from "react-icons/md";
import { GiSkills } from "react-icons/gi";
import { GrUserWorker } from "react-icons/gr";


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header id="header" className={`header ${scrolled ? 'header--scroll' : ''}`}>
      <div className="container">
        <nav className="nav">
        <a href="/" className="nav__brand">
          <img src="./img/logo.png" alt="Logo" style={{ height: "4rem", marginRight: "0.5em", verticalAlign: "middle" }} />
          Saida <span>Benzariya</span>
        </a>
          <div className={`nav__menu ${menuOpen ? 'nav__menu--open' : ''}`}>
            <ul className="nav__list">
              <li className="nav__item"><MdPerson3 className='nav__icon'/><a href="#hero" onClick={() => setMenuOpen(false)}>About</a></li>
              <li className="nav__item"><GiSkills className='nav__icon'/><a href="#services" onClick={() => setMenuOpen(false)}>TechnologiesSkills</a></li>
              <li className="nav__item"><GrUserWorker className='nav__icon'/><a href="#project" onClick={() => setMenuOpen(false)}>Projects</a></li>
              <li className="nav__item"><GrCertificate className='nav__icon' /><a href="#qualification" onClick={() => setMenuOpen(false)}>Qualification</a></li>
              <li className="nav__item"><MdContactPhone className='nav__icon'/><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
            </ul>
          </div>
          <div className="nav__toggle" onClick={toggleMenu}>
            <i className={menuOpen ? 'ri-close-line' : 'ri-menu-3-line'}></i>
          </div>
        </nav>
      </div>
    </header>
  );
}
