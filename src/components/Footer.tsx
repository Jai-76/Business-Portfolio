import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <a href="#top" className={styles.brandLink}>JAI<b>·</b>DEV</a>
            <p className={styles.tagline}>Full-Stack Developer &amp; AI/ML Engineer</p>
            <p className={styles.location}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              India
            </p>
          </div>

          <div className={styles.colGroup}>
            <div className={styles.col}>
              <p className={styles.colLabel}>Navigation</p>
              <ul className={styles.colLinks}>
                {['About', 'Services', 'Projects', 'Skills', 'Testimonials', 'Contact'].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      onClick={(e) => {
                        e.preventDefault();
                        document.querySelector(`#${item.toLowerCase()}`)?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.col}>
              <p className={styles.colLabel}>Connect</p>
              <ul className={styles.colLinks}>
                <li>
                  <a
                    href="https://github.com/Jai-76"
                    target="_blank"
                    rel="noopener noreferrer"
                    id="footer-github"
                    className={styles.socialLink}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com/in/jaideep-shekhawat"
                    target="_blank"
                    rel="noopener noreferrer"
                    id="footer-linkedin"
                    className={styles.socialLink}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                      <circle cx="4" cy="4" r="2"/>
                    </svg>
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://leetcode.com/u/Jai_adi"
                    target="_blank"
                    rel="noopener noreferrer"
                    id="footer-leetcode"
                    className={styles.socialLink}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 00-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038l-10.1 10.101c-.981.982-1.494 2.337-1.494 3.835 0 1.498.513 2.895 1.494 3.875l4.347 4.361c.981.979 2.337 1.452 3.834 1.452s2.853-.512 3.835-1.494l2.609-2.637c.514-.514.496-1.365-.039-1.9s-1.386-.553-1.899-.039z"/>
                    </svg>
                    LeetCode
                  </a>
                </li>
              </ul>
            </div>

            <div className={styles.col}>
              <p className={styles.colLabel}>Resources</p>
              <ul className={styles.colLinks}>
                <li>
                  <a
                    href="https://github.com/Jai-76"
                    target="_blank"
                    rel="noopener noreferrer"
                    id="footer-repos"
                    className={styles.socialLink}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
                      <polyline points="7 10 12 15 17 10"/>
                      <line x1="12" y1="15" x2="12" y2="3"/>
                    </svg>
                    View All Repos
                  </a>
                </li>
                <li>
                  <a href="mailto:jaishekhawat007@gmail.com" className={styles.socialLink}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                    jaishekhawat007@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>© {currentYear} Jaideep Shekhawat. All rights reserved.</span>
          <span className={styles.madeWith}>
            Designed &amp; built with care · India
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
