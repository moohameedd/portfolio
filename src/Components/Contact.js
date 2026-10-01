import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { VscGithubAlt } from 'react-icons/vsc';
import { FaLinkedinIn, FaInstagram, FaYoutube, FaKeyboard } from 'react-icons/fa';
import { SiCodeforces } from 'react-icons/si';
import { MdAlternateEmail } from 'react-icons/md';
import Page, { rise, stagger } from './Page';

const LINKS = [
  { label: 'Email', text: 'hama.ferchichi@gmail.com', url: 'mailto:hama.ferchichi@gmail.com', icon: <MdAlternateEmail />, color: 'teal' },
  { label: 'LinkedIn', text: 'linkedin.com/in/mohamed-ferchichi', url: 'https://www.linkedin.com/in/mohamed-ferchichi-5626b3330', icon: <FaLinkedinIn />, color: 'blue' },
  { label: 'GitHub', text: 'github.com/moohameedd', url: 'https://github.com/moohameedd', icon: <VscGithubAlt />, color: 'white' },
  { label: 'Codeforces', text: 'codeforces.com/profile/moohameedd', url: 'https://codeforces.com/profile/moohameedd', icon: <SiCodeforces />, color: 'orange' },
  { label: 'Monkeytype', text: 'monkeytype.com/profile/mohamedferchichi', url: 'https://monkeytype.com/profile/mohamedferchichi', icon: <FaKeyboard />, color: 'yellow' },
  { label: 'Instagram', text: 'instagram.com/m0hamed._.ferchichi', url: 'https://www.instagram.com/m0hamed._.ferchichi', icon: <FaInstagram />, color: 'pink' },
  { label: 'YouTube', text: 'youtube.com/@moohameedd-y3r', url: 'https://www.youtube.com/@moohameedd-y3r', icon: <FaYoutube />, color: 'red' },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);

    const subject = encodeURIComponent(fd.get('subject') || `Portfolio message from ${fd.get('name')}`);
    const text = encodeURIComponent(`${fd.get('message')}\n\nFrom: ${fd.get('name')} (${fd.get('email')})`);

    window.location.href = `mailto:hama.ferchichi@gmail.com?subject=${subject}&body=${text}`;
    setSubmitted(true);
  };

  return (
    <Page comment="/* contact.css : let's build something */" title="Contact" sub="// open to a PFE internship, collabs & good conversations">
      <div className="two-col contact-cols">
        <div>
          <motion.h2 variants={rise} className="sec-title">Find me on</motion.h2>
          <motion.div variants={stagger} className="link-list">
            {LINKS.map((l) => (
              <motion.a key={l.label} variants={rise} whileHover={{ x: 4 }} href={l.url} target="_blank" rel="noopener noreferrer" className={`panel link-row c-${l.color}`}>
                <span className="link-icon">{l.icon}</span>
                <span>
                  <span className="link-label">{l.label}</span>
                  <span className="link-text">{l.text}</span>
                </span>
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.form variants={rise} onSubmit={onSubmit} className="form">
          <h2 className="sec-title">Send a message</h2>
          <label>
            {"// your_name *"}
            <input name="name" required placeholder="string" />
          </label>
          <label>
            {"// your_email *"}
            <input name="email" type="email" required placeholder="string" />
          </label>
          <label>
            {"// subject"}
            <input name="subject" placeholder="string" />
          </label>
          <label>
            {"// message *"}
            <textarea name="message" rows="5" required placeholder="'''your message'''" />
          </label>
          <button type="submit" className="btn btn-primary">
            send_message()
          </button>
          {submitted && (
            <motion.p initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="form-note sent">
              {"// Opening your default email client..."}
            </motion.p>
          )}
        </motion.form>
      </div>
    </Page>
  );
}