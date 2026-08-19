import React, { useState } from 'react';
import { NAV_ITEMS } from '../data/portfolio';
import { useScrolled } from '../hooks/useInView';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  const scrolled = useScrolled(20);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <nav className={styles.nav}>
        <a className={styles.brand} href="#top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          JAI<b>·</b>DEV
        </a>

        <ul className={styles.navLinks}>
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          className={styles.navCta}
          href="#contact"
          onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
        >
          Let's Connect
        </a>

        <button
          className={`${styles.navToggle} ${mobileOpen ? styles.open : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
        </button>
      </nav>

      {mobileOpen && (
        <div className={styles.mobileMenu}>
          <ul>
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            className={styles.mobileCta}
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
          >
            Let's Connect →
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
