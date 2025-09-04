import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FaHome } from "react-icons/fa";
import { MdPerson3 } from "react-icons/md";
import { GrCertificate } from "react-icons/gr";
import { MdContactPhone } from "react-icons/md";
import { GiSkills } from "react-icons/gi";
import { GrUserWorker } from "react-icons/gr";
import "flag-icons/css/flag-icons.min.css";

export default function Navbar() {
  const { t, i18n } = useTranslation('nav');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleLang = () => setLangOpen(!langOpen);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setLangOpen(false);
  };

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
             <span></span>
          </a>

          <div className={`nav__menu ${menuOpen ? 'nav__menu--open' : ''}`}>
            <ul className="nav__list">
              <li className="nav__item"><MdPerson3 className='nav__icon'/><a href="#hero" onClick={() => setMenuOpen(false)}>{t('about')}</a></li>
              <li className="nav__item"><GiSkills className='nav__icon'/><a href="#services" onClick={() => setMenuOpen(false)}>{t('skills')}</a></li>
              <li className="nav__item"><GrUserWorker className='nav__icon'/><a href="#project" onClick={() => setMenuOpen(false)}>{t('projects')}</a></li>
              <li className="nav__item"><GrCertificate className='nav__icon'/><a href="#qualification" onClick={() => setMenuOpen(false)}>{t('qualification')}</a></li>
              <li className="nav__item"><MdContactPhone className='nav__icon'/><a href="#contact" onClick={() => setMenuOpen(false)}>{t('contact')}</a></li>
            </ul>
          </div>

          {/* Menu langue */}
          <div className="nav__right">
            <button className="lang-btn" onClick={toggleLang}>
              <span className={`fi fi-${i18n.language === 'fr' ? 'fr' : 'gb'}`} 
                    style={{ fontSize: "24px" }}></span>
            </button>
            {langOpen && (
              <ul className="lang-menu">
                <li onClick={() => changeLanguage('en')}>
                  <span className="fi fi-gb" style={{ fontSize: "20px" }}></span>
                </li>
                <li onClick={() => changeLanguage('fr')}>
                  <span className="fi fi-fr" style={{ fontSize: "20px" }}></span>
                </li>
              </ul>
            )}
          </div>


          <div className="nav__toggle" onClick={toggleMenu}>
            <i className={menuOpen ? 'ri-close-line' : 'ri-menu-3-line'}></i>
          </div>
        </nav>
      </div>
    </header>
  );
}
