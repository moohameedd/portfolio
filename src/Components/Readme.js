import { motion } from 'framer-motion';
import Page, { rise } from './Page';

const STACK = [
  ['Languages', ['Python', 'Java', 'C', 'R']],
  ['ML / Data', ['pandas', 'NumPy', 'Matplotlib', 'PyTorch', 'scikit-learn']],
  ['Web', ['HTML', 'CSS', 'JavaScript', 'PHP', 'React']],
  ['Databases', ['MySQL', 'Firebase', 'MongoDB']],
  ['Tools', ['Linux', 'Git', 'Android Studio']],
];

export default function Readme() {
  return (
    <Page comment="" title="Mohamed Ferchichi" sub="Big Data student @ ISAMM · Tunisia 🇹🇳">
      <motion.div variants={rise} className="chips badges">
        <span className="badge badge-teal">Big Data</span>
        <span className="badge badge-purple">Python</span>
        <span className="badge badge-blue">React</span>
        <span className="badge badge-pink-link">Looking for PFE internship</span>
      </motion.div>

      <motion.div variants={rise} className="md">
        <h2>About</h2>
        <p className="muted">
          Hi, Mohamed here. I'm passionate about software development and new technologies, and I
          like exploring new tools and pushing myself further. I live on Linux, chase speed on
          Monkeytype and rating points on Codeforces.
        </p>
        <ul className="plain-list">
          <li>3rd year · Data Analysis & Big Data</li>
          <li>Looking for a PFE internship</li>
          <li>Building ML models and neural networks from scratch</li>
        </ul>

        <h2>Facts About This Project</h2>
        <ul className="plain-list">
          <li>This is my first real project built using <b>React</b>.</li>
          <li>I didn't follow any step-by-step tutorial for this; it's the result of direct research, experimentation, and hands-on trial & error.</li>
          <li>To be completely transparent,
            not 100% of the code was written strictly by hand from scratch—whenever 
            I got stuck or wanted to move faster, I leveraged AI tools to assist and generate parts of 
            it.</li>
        </ul>

        <h2>Stack</h2>
        {STACK.map(([k, v]) => (
          <p key={k} className="stack-line">
            <span>{k}:</span>{v.map((s) => <code key={s}>{s}</code>)}
          </p>
        ))}

        <h2>Connect</h2>
        <p className="muted">
          Email: <a href="mailto:hama.ferchichi@gmail.com">hama.ferchichi@gmail.com</a><br />
          GitHub: <a href="https://github.com/moohameedd" target="_blank" rel="noopener noreferrer">moohameedd</a>
        </p>
      </motion.div>
    </Page>
  );
}