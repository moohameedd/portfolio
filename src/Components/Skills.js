import { motion } from 'framer-motion';
import Page, { rise, stagger } from './Page';

const GROUPS = [
  { title: 'Languages', color: 'pink', items: ['Python', 'Java', 'C', 'R (Statistics)'] },
  { title: 'Machine Learning', color: 'purple', items: ['pandas', 'NumPy', 'Matplotlib', 'PyTorch', 'scikit-learn'] },
  { title: 'Web', color: 'blue', items: ['HTML', 'CSS', 'JavaScript', 'PHP', 'React'] },
  { title: 'Databases', color: 'teal', items: ['MySQL', 'Firebase', 'MongoDB'] },
  { title: 'Tools', color: 'orange', items: ['Linux (Ubuntu)', 'Android Studio', 'Git'] },
  { title: 'Also', color: 'green', items: ['Typing 81 WPM', 'French', 'English', 'Arabic'] },
];

const chip = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 380, damping: 22 } },
};

export default function Skills() {
  return (
    <Page comment="// skills.json : tech stack & tools I use" title="Skills" sub={'{ "status": "always_learning", "looking_for": "PFE internship" }'}>
      <motion.div variants={stagger} className="skill-grid">
        {GROUPS.map((g) => (
          <motion.div key={g.title} variants={rise} className={`panel skill-group c-${g.color}`}>
            <h2 className="sec-title">{g.title}</h2>
            <motion.div variants={stagger} className="chips big">
              {g.items.map((s) => (
                <motion.span key={s} variants={chip} whileHover={{ y: -3, scale: 1.06 }} className="chip skill-chip">
                  {s}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </Page>
  );
}