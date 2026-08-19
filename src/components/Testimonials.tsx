import React from 'react';
import { TESTIMONIALS } from '../data/portfolio';
import { useInView } from '../hooks/useInView';
import styles from './Testimonials.module.css';

const Testimonials: React.FC = () => {
  const { ref, inView } = useInView();

  return (
    <section
      id="testimonials"
      ref={ref as React.RefObject<HTMLElement>}
      className={`${styles.section} ${inView ? styles.inView : ''}`}
    >
      <div className={styles.inner}>
        <div className={styles.header}>
          <div>
            <p className={styles.sectionTag}>Kind words</p>
            <h2 className={styles.heading}>What collaborators say.</h2>
          </div>
          <p className={styles.note}>
            Feedback from teammates, clients, and project collaborators.
          </p>
        </div>

        <div className={styles.grid}>
          {/* Large featured testimonial */}
          <div className={`${styles.card} ${styles.featured}`}>
            <div className={styles.stars}>{'★'.repeat(TESTIMONIALS[0].rating)}</div>
            <blockquote className={styles.quote}>
              "{TESTIMONIALS[0].quote}"
            </blockquote>
            <div className={styles.who}>
              <div className={styles.avatar} style={{ background: TESTIMONIALS[0].color }}>
                {TESTIMONIALS[0].initials}
              </div>
              <div>
                <b>{TESTIMONIALS[0].name}</b>
                <span>{TESTIMONIALS[0].role}, {TESTIMONIALS[0].company}</span>
              </div>
            </div>
          </div>

          {/* Stacked smaller cards */}
          <div className={styles.stack}>
            {TESTIMONIALS.slice(1).map((t, i) => (
              <div
                key={t.id}
                className={styles.card}
                style={{ transitionDelay: `${(i + 1) * 80}ms` }}
              >
                <div className={styles.stars}>{'★'.repeat(t.rating)}</div>
                <blockquote className={styles.quote}>"{t.quote}"</blockquote>
                <div className={styles.who}>
                  <div className={styles.avatar} style={{ background: t.color }}>
                    {t.initials}
                  </div>
                  <div>
                    <b>{t.name}</b>
                    <span>{t.role}, {t.company}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
