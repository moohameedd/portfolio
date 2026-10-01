import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { VscGithubAlt } from 'react-icons/vsc';
import Page, { rise } from './Page';

const PROJECTS = [
  { icon: '', cat: 'AI', kind: 'Neural Networks · Web', name: 'Digit Recognition', github: 'https://github.com/moohameedd/Digit-recognition',
    desc: 'A neural network trained for handwritten digit recognition, wrapped in a web interface where you draw a digit and get a live prediction.',
    tags: ['Python', 'Neural Networks', 'HTML', 'CSS', 'JavaScript'] },

  { icon: '', cat: 'Data', kind: 'Data Analysis · Machine Learning', name: 'Student Performance Analysis', github: 'https://github.com/moohameedd/Student-Performance-Analysis',
    desc: 'EDA and ML on the habits of 80K students (motivation, stress, sleep, study) versus grades. Compared five models, clustered students into behavioral profiles with K-Means and extracted association rules.',
    tags: ['Python', 'pandas', 'scikit-learn', 'K-Means', 'Random Forest'] },

  { icon: '', cat: 'AI', kind: 'Mathematics · Deep Learning', name: 'Neural Network From Scratch', github: 'https://github.com/moohameedd/neural-network-from-scratch-',
    desc: 'A full neural network in pure NumPy: forward and backward propagation and gradient descent, with no deep learning framework.',
    tags: ['Python', 'NumPy', 'Mathematics'] },

  { icon: '', cat: 'Web', kind: 'Front-end · React', name: 'This Portfolio (VS Code Theme)', github: 'https://github.com/moohameedd/portfolio',
    desc: 'A portfolio that replicates the VS Code interface: theme, file explorer and tabs, built to present my work in an interactive way.',
    tags: ['React', 'JavaScript', 'Framer Motion', 'CSS'] },

  { icon: '', cat: 'Mobile', kind: 'Android · Java', name: 'Bablio App', github: 'https://github.com/moohameedd/Babelio_App',
    desc: 'An Android library management application.',
    tags: ['Java', 'Android Studio'] },

  { icon: '', cat: 'Web', kind: 'Full stack · PHP', name: 'Bondin Coffee', github: 'https://github.com/moohameedd/Coffee_Bondin',
    desc: 'A coffee shop website with menu and order management.',
    tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'] },
];
const FILTERS = ['All', 'AI', 'Data', 'Web', 'Mobile'];

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const shown = PROJECTS.filter((p) => filter === 'All' || p.cat === filter);

  return (
    <Page comment="// projects.js : things I've built" title="Projects" sub={`const projects = [ ...${PROJECTS.length} items ]`}>
      <motion.div variants={rise} className="filters">
        {FILTERS.map((f) => (
          <button key={f} className={`filter ${filter === f ? 'on' : ''}`} onClick={() => setFilter(f)}>
            {filter === f && <motion.span layoutId="filter-pill" className="filter-pill" />}
            <span className="filter-label">{f}</span>
          </button>
        ))}
      </motion.div>

      <motion.div layout className="cards">
        <AnimatePresence mode="popLayout">
          {shown.map((p) => (
            <motion.article
              key={p.name}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              whileHover={{ y: -4 }}
              className="panel card"
            >
              <div className="row-between">
                <span className="card-icon">{p.icon}</span>
                <a href={p.github} target="_blank" rel="noopener noreferrer" className="mini-link">
                  <VscGithubAlt /> GitHub
                </a>
              </div>
              <p className="kind">{p.kind}</p>
              <h3 className="card-title">{p.name}</h3>
              <p className="muted">{p.desc}</p>
              <div className="chips">{p.tags.map((t) => <span key={t} className="chip">{t}</span>)}</div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </Page>
  );
}