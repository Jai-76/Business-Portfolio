import React, { useState, useEffect, useRef } from 'react';
import { PROJECTS } from '../data/portfolio';
import type { Project } from '../types';
import styles from './Projects.module.css';

/* ── colour map ── */
const GRADIENTS: Record<string, string> = {
  v1: 'linear-gradient(140deg, #3B5BDB 0%, #1A2FA8 100%)',
  v2: 'linear-gradient(140deg, #0CA678 0%, #087F5B 100%)',
  v3: 'linear-gradient(140deg, #4A4740 0%, #171512 100%)',
  v4: 'linear-gradient(140deg, #2C8A6E 0%, #164438 100%)',
  v5: 'linear-gradient(140deg, #D6336C 0%, #8B1A42 100%)',
  v6: 'linear-gradient(140deg, #F08C00 0%, #8A5200 100%)',
};

/* ── visual mock elements ── */
const VisualContent: React.FC<{ v: string }> = ({ v }) => {
  if (v === 'v1')
    return (
      <div className={styles.uiMock}>
        <div className={styles.uiBar} />
        <div className={`${styles.uiBar} ${styles.short}`} />
        <div className={styles.uiBtn} />
      </div>
    );
  if (v === 'v2') return <div className={styles.logoMock}>SS</div>;
  if (v === 'v3')
    return (
      <div className={styles.chartMock}>
        {[60, 85, 40, 72, 95].map((h, i) => (
          <div key={i} className={`${styles.bar} ${i === 4 ? styles.barActive : ''}`} style={{ height: `${h}%` }} />
        ))}
      </div>
    );
  if (v === 'v4')
    return (
      <div className={styles.uiMock}>
        <div className={styles.uiBar} />
        <div className={`${styles.uiBar} ${styles.short}`} />
        <div className={styles.uiBtn} />
      </div>
    );
  if (v === 'v5')
    return (
      <div className={styles.chartMock}>
        {[45, 70, 90, 60, 80].map((h, i) => (
          <div key={i} className={`${styles.bar} ${i === 2 ? styles.barActive : ''}`} style={{ height: `${h}%` }} />
        ))}
      </div>
    );
  // v6
  return (
    <div className={styles.textMock}>
      {[100, 80, 65, 100, 45].map((w, i) => (
        <div key={i} className={styles.textLine} style={{ width: `${w}%` }} />
      ))}
    </div>
  );
};

/* ── single project card ── */
interface CardProps {
  project: Project;
  index: number;
  reverse: boolean;
}

const ProjectCard: React.FC<CardProps> = ({ project, index, reverse }) => {
  const cardRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        obs.disconnect();

        const base = index * 60; // offset per card

        /* card wrapper pop */
        setTimeout(() => card.classList.add(styles.inView), base);

        /* visual panel slides in from the correct side */
        const visual = card.querySelector<HTMLElement>(`.${styles.visual}`);
        if (visual) {
          setTimeout(() => {
            visual.classList.add(reverse ? styles.slideInRight : styles.slideIn);
          }, base + 60);
        }

        /* body text slides from opposite side */
        const body = card.querySelector<HTMLElement>(`.${styles.body}`);
        if (body) {
          setTimeout(() => {
            body.classList.add(reverse ? styles.slideInLeft : styles.slideIn);
          }, base + 130);
        }

        /* tags pop in staggered */
        card.querySelectorAll<HTMLElement>(`.${styles.tag}`).forEach((tag, i) => {
          setTimeout(() => tag.classList.add(styles.visible), base + 260 + i * 55);
        });

        /* outcome line fades */
        const outcome = card.querySelector<HTMLElement>(`.${styles.outcome}`);
        if (outcome) {
          setTimeout(() => outcome.classList.add(styles.visible), base + 440);
        }
      },
      { threshold: 0.14 }
    );

    obs.observe(card);
    return () => obs.disconnect();
  }, [index, reverse]);

  return (
    <article
      ref={cardRef as React.RefObject<HTMLElement>}
      className={`${styles.card} ${reverse ? styles.reverse : ''}`}
    >
      <div className={styles.visual} style={{ background: GRADIENTS[project.visual] }}>
        <div className={styles.visualContent}>
          <VisualContent v={project.visual} />
        </div>
        <span className={styles.visualTag}>{project.category}</span>
      </div>

      <div className={styles.body}>
        <p className={styles.client}>{project.client}</p>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.desc}>{project.description}</p>
        <div className={styles.tags}>
          {project.tags.map((tag) => (
            <span key={tag} className={styles.tag}>{tag}</span>
          ))}
        </div>
        <p className={styles.outcome}>→ {project.outcome}</p>
        {project.link && (
          <a className={styles.link} href={project.link}>
            Read the case study
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        )}
      </div>
    </article>
  );
};

/* ── filter tabs ── */
const FILTERS = ['All', 'AI/ML', 'Web', 'Fintech', 'IoT'];

/* ── section ── */
const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const headerRef = useRef<HTMLDivElement>(null);

  /* animate header elements on scroll */
  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        obs.disconnect();

        const tag = header.querySelector<HTMLElement>(`.${styles.sectionTag}`);
        const heading = header.querySelector<HTMLElement>(`.${styles.heading}`);
        const filters = header.querySelectorAll<HTMLElement>(`.${styles.filter}`);

        if (tag) tag.classList.add(styles.visible);
        if (heading) setTimeout(() => heading.classList.add(styles.visible), 80);
        filters.forEach((f, i) => setTimeout(() => f.classList.add(styles.visible), 160 + i * 60));
      },
      { threshold: 0.3 }
    );

    obs.observe(header);
    return () => obs.disconnect();
  }, []);

  const filtered =
    activeFilter === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category.toLowerCase().includes(activeFilter.toLowerCase()));

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.inner}>
        <div className={styles.header} ref={headerRef}>
          <div>
            <p className={styles.sectionTag}>Selected work</p>
            <h2 className={styles.heading}>Real projects. Real impact.</h2>
          </div>
          <div className={styles.filters}>
            {FILTERS.map((f) => (
              <button
                key={f}
                className={`${styles.filter} ${activeFilter === f ? styles.filterActive : ''}`}
                onClick={() => setActiveFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.list}>
          {filtered.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              reverse={i % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
