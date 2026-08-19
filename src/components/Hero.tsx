import React from 'react';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
  return (
    <section className={styles.hero} id="top">
      <div className={styles.inner}>
        <p className={styles.eyebrow}>
          <span className={styles.dot} />
          Open to opportunities — Aug 2026
        </p>

        <h1 className={styles.title}>
          Full-Stack &amp; AI<br />
          engineer who<br />
          <em>ships real things.</em>
        </h1>

        <div className={styles.sub}>
          <p className={styles.desc}>
            I'm Jaideep Shekhawat, a developer passionate about cloud, AI/ML, and building
            full-stack applications that solve real problems — from NLP-powered compliance
            tools to IoT sustainability platforms.
          </p>
          <div className={styles.meta}>
            <div className={styles.stat}>
              <span>Based in</span>
              <b>India</b>
            </div>
            <div className={styles.stat}>
              <span>GitHub repos</span>
              <b>139+</b>
            </div>
            <div className={styles.stat}>
              <span>Focus areas</span>
              <b>AI/ML · Cloud · Web</b>
            </div>
          </div>
        </div>

        <div className={styles.actions}>
          <a
            className={styles.btnPrimary}
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            View my work
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
          <a
            className={styles.btnSecondary}
            href="https://github.com/Jai-76"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Profile
          </a>
        </div>

        <div className={styles.trustedBar}>
          <span className={styles.trustedLabel}>Built with</span>
          <div className={styles.logos}>
            {['React', 'Node.js', 'Python', 'FastAPI', 'Next.js', 'AWS'].map((name, i, arr) => (
              <React.Fragment key={name}>
                <span className={styles.logoItem}>{name}</span>
                {i < arr.length - 1 && <span className={styles.logoDot}>·</span>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
