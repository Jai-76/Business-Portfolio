import React from 'react';
import { SERVICES } from '../data/portfolio';
import { useInView } from '../hooks/useInView';
import styles from './Services.module.css';

const Services: React.FC = () => {
  const { ref, inView } = useInView();

  return (
    <section
      id="services"
      ref={ref as React.RefObject<HTMLElement>}
      className={`${styles.services} ${inView ? styles.inView : ''}`}
    >
      <div className={styles.inner}>
        <div className={styles.header}>
          <div>
            <p className={styles.sectionTag}>What I do</p>
            <h2 className={styles.heading}>What I build, and how I build it.</h2>
          </div>
          <p className={styles.note}>
            Clear scope. Clean code. No handoffs lost in translation — I take ownership end-to-end.
          </p>
        </div>

        <div className={styles.grid}>
          {SERVICES.map((service, i) => (
            <div
              key={service.title}
              className={styles.card}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <span className={styles.icon}>{service.icon}</span>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDesc}>{service.description}</p>
              <ul className={styles.features}>
                {service.features.map((f) => (
                  <li key={f}>
                    <span className={styles.bullet} />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.process}>
          <p className={styles.processLabel}>How a project runs</p>
          <div className={styles.steps}>
            {['Plan', 'Build', 'Test', 'Ship'].map((step, i) => (
              <React.Fragment key={step}>
                <div className={styles.step}>
                  <span className={styles.stepNum}>0{i + 1}</span>
                  <span className={styles.stepName}>{step}</span>
                </div>
                {i < 3 && <div className={styles.stepConnector} />}
              </React.Fragment>
            ))}
          </div>
          <div className={styles.processMeta}>
            <span>Typical timeline: 1–6 weeks</span>
            <span>·</span>
            <span>Remote-first workflow</span>
            <span>·</span>
            <span>GitHub-based collaboration</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
