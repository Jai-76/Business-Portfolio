import React, { useState } from 'react';
import { SKILLS } from '../data/portfolio';
import { useInView } from '../hooks/useInView';
import styles from './Skills.module.css';

const CATEGORIES = ['All', 'Cloud & AI', 'Frontend', 'Backend'];

const Skills: React.FC = () => {
  const { ref, inView } = useInView();
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? SKILLS
    : SKILLS.filter((s) => s.category === activeCategory);

  const groupedAll = SKILLS.reduce<Record<string, typeof SKILLS>>((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <section
      id="skills"
      ref={ref as React.RefObject<HTMLElement>}
      className={`${styles.skills} ${inView ? styles.inView : ''}`}
    >
      <div className={styles.inner}>
        <div className={styles.header}>
          <div>
            <p className={styles.sectionTag}>Technical Skills</p>
            <h2 className={styles.heading}>The stack behind the work.</h2>
          </div>
          <div className={styles.filters}>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`${styles.filter} ${activeCategory === cat ? styles.filterActive : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {activeCategory === 'All' ? (
          <div className={styles.allGroups}>
            {Object.entries(groupedAll).map(([category, skills]) => (
              <div key={category} className={styles.group}>
                <p className={styles.groupLabel}>{category}</p>
                <div className={styles.skillList}>
                  {skills.map((skill, i) => (
                    <SkillBar key={skill.name} skill={skill} delay={i * 60} visible={inView} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className={styles.skillList}>
            {filtered.map((skill, i) => (
              <SkillBar key={skill.name} skill={skill} delay={i * 60} visible={inView} />
            ))}
          </div>
        )}

        <div className={styles.chips}>
          <p className={styles.chipsLabel}>Also familiar with</p>
          <div className={styles.chipGrid}>
            {['Docker', 'GCP', 'Jupyter', 'Razorpay', 'OAuth 2.0', 'JWT', 'LeetCode', 'GitHub Actions', 'Pandas', 'Scikit-learn', 'XGBoost', 'MQTT'].map((tool) => (
              <span key={tool} className={styles.chip}>{tool}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface SkillBarProps {
  skill: { name: string; level: number; category: string };
  delay: number;
  visible: boolean;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill, delay, visible }) => (
  <div className={styles.skillRow}>
    <div className={styles.skillMeta}>
      <span className={styles.skillName}>{skill.name}</span>
      <span className={styles.skillLevel}>{skill.level}%</span>
    </div>
    <div className={styles.track}>
      <div
        className={styles.fill}
        style={{
          width: visible ? `${skill.level}%` : '0%',
          transitionDelay: `${delay}ms`,
        }}
      />
    </div>
  </div>
);

export default Skills;
