import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { VscFolderOpened, VscPerson, VscMail, VscGithubAlt } from 'react-icons/vsc';
import { FaInstagram, FaYoutube, FaLinkedinIn, FaKeyboard } from 'react-icons/fa';
import { SiCodeforces } from 'react-icons/si';
import { MdAlternateEmail } from 'react-icons/md';
import './Home.css';

/*data*/

const TYPED_LINES = [
  'Passionate about data and AI',
  'Always typing on Monkeytype',
  'Solving problems on Codeforces',
  'Living on Linux, breaking things on purpose',
];

const ROTATING_STATS = [
  { symbol:'↑', label:'ALWAYS LEARNING'},
  {symbol: '⌨', label:'ALWAYS TYPING'},
  {symbol:'{}', label:'ALWAYS CODING'},
  {symbol: '$_', label:'ALWAYS ON LINUX' },
];

const STATS = [
  { value:'4+',label:'YEARS CODING' },
  {value:'6+',label:'PROJECTS'},
  { value:'∞',label:'CURIOSITY'},
];

const SOCIAL_LINKS = [
  { label: 'GitHub', icon: <VscGithubAlt />, url: 'https://github.com/moohameedd' },
  { label: 'LinkedIn', icon: <FaLinkedinIn />, url: 'https://www.linkedin.com/in/mohamed-ferchichi-5626b3330' },
  { label: 'Codeforces', icon: <SiCodeforces />, url: 'https://codeforces.com/profile/moohameedd' },
  { label: 'Monkeytype', icon: <FaKeyboard />, url: 'https://monkeytype.com/profile/mohamedferchichi' },
  { label: 'Instagram', icon: <FaInstagram />, url: 'https://www.instagram.com/m0hamed._.ferchichi' },
  { label: 'YouTube', icon: <FaYoutube />, url: 'https://www.youtube.com/@moohameedd-y3r' },
  { label: 'Email', icon: <MdAlternateEmail />, url: 'mailto:hama.ferchichi@gmail.com' },
];

const BADGES = [
  { text:'Big Data Student', color:'teal' },
  {text:'Competitive Programmer', color:'purple' },
  { text:'Monkeytype Addict', color:'blue' },
];

/*Hooks*/

function useTypewriter(lines, { typeMs = 55, deleteMs = 28, holdMs = 1600, gapMs = 350 } = {}) {
  const [text, setText] = useState('');
  const [lineIndex, setLineIndex] = useState(0);
  const [phase, setPhase] = useState('typing'); //typing,holding,deleting

  useEffect(() => {
    const full = lines[lineIndex];
    let t;
    if (phase === 'typing') {
      if (text.length < full.length) t = setTimeout(() => setText(full.slice(0, text.length + 1)), typeMs);
      else t = setTimeout(() => setPhase('holding'), 0);
    } else if (phase === 'holding') {
      t = setTimeout(() => setPhase('deleting'), holdMs);
    } else if (phase === 'deleting') {
      if (text.length > 0) t = setTimeout(() => setText(full.slice(0, text.length - 1)), deleteMs);
      else t = setTimeout(() => { setLineIndex((i) => (i + 1) % lines.length); setPhase('typing'); }, gapMs);
    }
    return () => clearTimeout(t);
  }, [text, phase, lineIndex, lines, typeMs, deleteMs, holdMs, gapMs]);

  return text;
}

function useCycle(length, ms) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((n) => (n + 1) % length), ms);
    return () => clearInterval(id);
  }, [length, ms]);
  return i;
}

/*anitmations*/

const container = { hidden: {}, show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } } };
const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

/*component*/
// onNavigate(fileName) is given by MiniSideBar: it opens that file in a tab.
export default function Home({ onNavigate }) {
  const typed = useTypewriter(TYPED_LINES);
  const statIndex = useCycle(ROTATING_STATS.length, 2600);
  const stat = ROTATING_STATS[statIndex];
  const go = (file) => () => onNavigate && onNavigate(file);

  return (
    <motion.section id="home" className="home-container" variants={container} initial="hidden" animate="show">
      <motion.p variants={item} className="code-comment">{'// hello world !! Welcome to my portfolio'}</motion.p>
      <motion.h1 variants={item} className="hero-name">
        Mohamed <br />
        <span className="hero-lastname">Ferchichi</span>
      </motion.h1>
      <motion.div variants={item} className="badge-group">
        {BADGES.map((b) => (
          <span key={b.text} className={`badge badge-${b.color}`}>
            <span className={`dot dot-${b.color}`} />
            {b.text}
          </span>
        ))}
        <a href="https://isa2m.rnu.tn/" target="_blank" rel="noopener noreferrer" className="badge badge-pink-link">
          <span className="dot dot-pink" />@ ISAMM
        </a>
      </motion.div>

      <motion.p variants={item} className="hero-subtext" aria-live="polite">
        <span className="prompt">&gt;</span>
        <span className="typed">{typed}</span>
        <span className="caret" aria-hidden="true" />
      </motion.p>

      <motion.p variants={item} className="hero-description">
        I live at the crossroads of <strong>Linux</strong>, <strong>algorithms</strong> and{' '}
        <strong>big data</strong>. I&apos;m a Big Data student at <em>ISAMM</em> who chases speed on
        Monkeytype and rating points on Codeforces, and I build things that are fast and scalable.
      </motion.p>

      <motion.div variants={item} className="action-buttons">
        <button type="button" className="btn btn-primary" onClick={go('projects.js')}>
          <VscFolderOpened />Projects
        </button>
        <button type="button" className="btn btn-secondary" onClick={go('about.html')}>
          <VscPerson />About Me
        </button>
        <button type="button" className="btn btn-secondary" onClick={go('contact.css')}>
          <VscMail />Contact
        </button>
      </motion.div>

      <motion.div variants={item} className="stats-bar">
        {STATS.map((s) => (
          <div key={s.label} className="stat">
            <span className="stat-value">{s.value}</span>
            <span className="stat-label">{s.label}</span>
          </div>
        ))}
        <div className="stat stat-rotating">
          <AnimatePresence mode="wait">
            <motion.div
              key={stat.label}
              className="stat-swap"
              initial={{ opacity: 0, y: 12, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -12, filter: 'blur(4px)' }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
            >
              <span className="stat-value">{stat.symbol}</span>
              <span className="stat-label">{stat.label}</span>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>

      <motion.div variants={item} className="social-bar">
        {SOCIAL_LINKS.map((link) => (
          <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer" className="social-btn">
            <span className="social-icon">{link.icon}</span>
            <span>{link.label}</span>
          </a>
        ))}
      </motion.div>
    </motion.section>
  );
}