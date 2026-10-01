import { motion } from 'framer-motion';
import { FaFileDownload, FaFilePdf } from 'react-icons/fa';
import Page, { rise } from './Page';
import { CV_URL } from './WorkspaceContext';

export default function Resume() {
  return (
    <Page comment="// Resume.pdf" title="Resume" sub="// one PDF, always up to date">
      <motion.div variants={rise} className="panel resume-card" whileHover={{ y: -3 }}>
        <div className="resume-icon"><FaFilePdf /></div>
        <div className="resume-info">
          <h2 className="item-title">CV_Mohamed_Ferchichi_EN.pdf</h2>
          <p className="muted">Education, projects, technical skills and certifications.</p>
        </div>
        <a className="btn btn-primary" href={CV_URL} download="CV_Mohamed_Ferchichi_EN.pdf">
          <FaFileDownload/>Download CV
        </a>
      </motion.div>
    </Page>
  );
}
