import React, { useEffect, useRef } from 'react';
import styles from './About.module.css';

const STATS = [
  { value: '139+', label: 'GitHub repos' },
  { value: '248', label: 'Contributions/yr' },
  { value: '6+', label: 'Projects shipped' },
  { value: '19', label: 'GitHub followers' },
];

const TOOLS = ['Python', 'React', 'Node.js', 'FastAPI', 'Next.js', 'TypeScript', 'AWS', 'MongoDB'];

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        // Stagger each animated element with increasing delays
        const animate = (selector: string, baseDelay: number, perItemDelay = 0) => {
          const els = section.querySelectorAll<HTMLElement>(selector);
          els.forEach((el, i) => {
            setTimeout(() => {
              el.style.animationDelay = `${perItemDelay * i}ms`;
              el.classList.add(styles.visible);
            }, baseDelay + perItemDelay * i);
          });
        };

        animate(`.${styles.sectionTag}`, 0);
        animate(`.${styles.heading}`, 80);
        // Each body paragraph staggers
        animate(`.${styles.body}`, 160, 90);
        animate(`.${styles.photoWrap}`, 100);
        animate(`.${styles.badge}`, 500);
        animate(`.${styles.statCard}`, 350, 80);
        animate(`.${styles.toolChip}`, 420, 45);
      },
      { threshold: 0.12 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className={styles.about}>
      <div className={styles.inner}>
        {/* LEFT */}
        <div className={styles.left}>
          <p className={styles.sectionTag}>About me</p>
          <h2 className={styles.heading}>
            Code is a craft,<br />not just a career.
          </h2>
          <p className={styles.body}>
            I'm Jaideep Shekhawat — a developer who loves building real things. Whether
            it's wiring up an AI chat system with multi-LLM streaming or designing an
            IoT sustainability platform from scratch, I care deeply about the "why" behind
            every line of code.
          </p>
          <p className={styles.body}>
            My sweet spot is the intersection of cloud, AI/ML, and full-stack web — turning
            complex requirements into clean, working software. I'm an active LeetCode
            practitioner and hold GitHub's Pull Shark ×2 achievement for consistent
            open-source contributions.
          </p>
          <p className={styles.body}>
            When I'm not coding, I'm deep in DSA problems, exploring the latest in
            generative AI (currently studying IITM's Mathematical Foundations for
            GenAI), or finding ways to make software do something genuinely useful.
          </p>

          <div className={styles.tools}>
            <p className={styles.toolsLabel}>Tools I use daily</p>
            <div className={styles.toolGrid}>
              {TOOLS.map((tool) => (
                <span key={tool} className={styles.toolChip}>{tool}</span>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className={styles.right}>
          <div className={styles.photoWrap}>
            <div className={styles.photo}>
              <span className={styles.initials}>JS</span>
            </div>
            <div className={styles.badge}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Open to work
            </div>
          </div>

          <div className={styles.statsGrid}>
            {STATS.map((s) => (
              <div key={s.label} className={styles.statCard}>
                <b>{s.value}</b>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
