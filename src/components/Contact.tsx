import React, { useState } from 'react';
import { useInView } from '../hooks/useInView';
import styles from './Contact.module.css';

const Contact: React.FC = () => {
  const { ref, inView } = useInView(0.1);
  const [form, setForm] = useState({ name: '', email: '', budget: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section
      id="contact"
      ref={ref as React.RefObject<HTMLElement>}
      className={`${styles.contact} ${inView ? styles.inView : ''}`}
    >
      <div className={styles.inner}>
        <div className={styles.left}>
          <p className={styles.eyebrow}>
            <span className={styles.dot} />
            Open to opportunities · Aug 2026
          </p>
          <h2 className={styles.heading}>
            Open to collaborations?<br />
            <em>Let's talk it through.</em>
          </h2>
          <p className={styles.desc}>
            No long forms — just a quick intro. I'll usually respond within 24 hours
            with a few questions to see if we're a good fit.
          </p>

          <div className={styles.directLinks}>
            <a href="mailto:jaishekhawat007@gmail.com" className={styles.directLink}>
              <span className={styles.dlIcon}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </span>
              <div>
                <b>Email</b>
                <span>jaishekhawat007@gmail.com</span>
              </div>
            </a>
            <a href="https://linkedin.com/in/jaideep-shekhawat" target="_blank" rel="noopener noreferrer" className={styles.directLink}>
              <span className={styles.dlIcon}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </span>
              <div>
                <b>Connect on LinkedIn</b>
                <span>linkedin.com/in/jaideep-shekhawat</span>
              </div>
            </a>
          </div>
        </div>

        <div className={styles.right}>
          {submitted ? (
            <div className={styles.success}>
              <div className={styles.successIcon}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
              <h3>Message sent!</h3>
              <p>I'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit} noValidate>
              <div className={styles.row}>
                <div className={styles.field}>
                  <label htmlFor="name">Your name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Alex Johnson"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className={styles.field}>
                  <label htmlFor="email">Email address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="alex@company.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className={styles.field}>
                <label htmlFor="budget">Project budget</label>
                <select id="budget" name="budget" value={form.budget} onChange={handleChange}>
                  <option value="">Select a range…</option>
                  <option value="5k-10k">$5k – $10k</option>
                  <option value="10k-25k">$10k – $25k</option>
                  <option value="25k-50k">$25k – $50k</option>
                  <option value="50k+">$50k+</option>
                  <option value="not-sure">Not sure yet</option>
                </select>
              </div>

              <div className={styles.field}>
                <label htmlFor="message">Tell me about the project</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="What problem are you solving? Where are you stuck? What's the timeline?"
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className={styles.submit} disabled={loading}>
                {loading ? (
                  <span className={styles.spinner} />
                ) : (
                  <>
                    Send message
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="22" y1="2" x2="11" y2="13"/>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                    </svg>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
