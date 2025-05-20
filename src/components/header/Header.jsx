import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header id="header">
      <div className="row">
        <div className="logo">
          <a href="/">
            <img src="../../../public/assets/logo/Logo portfolio.png" alt="Logo" />
          </a>
        </div>

        <button className="mobile-menu-button" onClick={toggleMenu}>
          <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
        </button>

        <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}>
          <ul id="nav">
            <li><a href="/about" onClick={() => setIsMenuOpen(false)}>à propos de moi</a></li>
            <li><a href="/parcours" onClick={() => setIsMenuOpen(false)}>parcours</a></li>
            <li><a href="/travaux" onClick={() => setIsMenuOpen(false)}>travaux</a></li>
            <li><a href="/contact" onClick={() => setIsMenuOpen(false)}>contacts</a></li>
            <li>
              <ul className="social">
                <li className="github">
                  <a href="https://github.com/Labrugeee" title="Suivez-moi sur GitHub !" target="_blank" rel="noopener noreferrer">
                    <img src="../../../public/assets/social logo/github.png" alt="GitHub Logo" />
                  </a>
                </li>
                <li className="assessfirst">
                  <a href="https://my.assessfirst.com/profile/synthesis" title="Consultez mon profil AssessFirst !" target="_blank" rel="noopener noreferrer">
                    <img src="../../../public/assets/social logo/profile.png" alt="AssessFirst Logo" />
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header; 