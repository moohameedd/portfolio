import { motion } from 'framer-motion';
import './Pages.css';

export const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};
export const rise = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

export default function Page({ comment, title, sub, children }) {
  return (
    <motion.section className="page" variants={stagger} initial="hidden" animate="show">
      {comment && <motion.p variants={rise} className="page-comment">{comment}</motion.p>}
      <motion.h1 variants={rise} className="page-title">{title}</motion.h1>
      {sub && <motion.p variants={rise} className="page-sub">{sub}</motion.p>}
      {children}
    </motion.section>
  );
}