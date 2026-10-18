import { useState } from 'react';
import { Copy, Mail, Github, Linkedin, Send } from 'lucide-react';
import { email, openEmailDraft } from '../utils/contactUtils';
export default function Contact() {
  const [status, setStatus] = useState('');
  const [draftStatus, setDraftStatus] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setStatus('Email address copied.');
    } catch {
      setStatus(
        'Could not copy. Select the email address above, or use the email link.',
      );
    }
  };
  const submit = (event) => {
    event.preventDefault();
    openEmailDraft(name, message);
    setDraftStatus(
      'Email draft requested. Send it from your email app. Your message stays here if no app opens.',
    );
  };
  return (
    <section id="contact" className="section restored contact-section">
      <div className="container">
        <div className="section-heading">
          <h2>Get In Touch</h2>
          <p className="muted">
            For software engineering opportunities or a conversation about my
            work, you can reach me here.
          </p>
        </div>
        <div className="contact-columns">
          <div id="contact-links">
            <h3 className="contact-subtitle">Let’s start a conversation</h3>
            <div className="contact-methods">
              <a className="contact-method" href={'mailto:' + email}>
                <span className="panel-icon">
                  <Mail size={23} />
                </span>
                <span>
                  <strong>Email</strong> <span className="muted">{email}</span>
                </span>
              </a>
              <a
                className="contact-method"
                href="https://github.com/Akushu2357"
                target="_blank"
                rel="noreferrer"
              >
                <span className="panel-icon">
                  <Github size={23} />
                </span>
                <span>
                  <strong>GitHub</strong>{' '}
                  <span className="muted">Akushu2357</span>
                </span>
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
              <a
                className="contact-method"
                href="https://www.linkedin.com/in/worapat-chuchoed-9352b929b/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="panel-icon">
                  <Linkedin size={23} />
                </span>
                <span>
                  <strong>LinkedIn</strong>{' '}
                  <span className="muted">Worapat Chuchoed</span>
                </span>
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
            <button className="button" onClick={copy}>
              <Copy size={16} /> Copy email address
            </button>
            <p role="status" className="copy-status">
              {status}
            </p>
          </div>
          <form
            id="contact-draft"
            className="contact-form detail-panel"
            onSubmit={submit}
          >
            <h3>Send a message</h3>
            <div className="field">
              <label htmlFor="contact-name">Your name</label>
              <input
                id="contact-name"
                name="name"
                autoComplete="name"
                required
                maxLength={120}
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            <div className="field">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={3}
                maxLength={3000}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
              />
            </div>
            <p className="muted form-note" id="draft-help">
              This opens a draft in your email app. You review and send the
              email there.
            </p>
            <button
              className="button primary"
              type="submit"
              aria-describedby="draft-help"
            >
              <Send size={17} /> Open email draft
            </button>
            <p role="status" className="draft-status">
              {draftStatus}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
