import ContactCode from '@/components/ContactCode';
import styles from '@/styles/ContactPage.module.css';
import { useState } from 'react';
import emailjs from 'emailjs-com';

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
const USER_ID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID!;

const ContactPage = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const title = 'Portfolio Contact';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    const now = new Date();
    const time = now.toLocaleString();
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        { title, name, time, message },
        USER_ID
      );
      setStatus('sent');
      setName('');
      setMessage('');
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <div className={styles.layout}>
      <h1 className={styles.pageTitle}>Contact Me</h1>
      <p className={styles.pageSubtitle}>
        Feel free to reach out to me through any of the social platforms below or send a direct message!
      </p>
      <div className={styles.container} style={{display: 'flex', gap: '2rem', alignItems: 'flex-start'}}>
        <div className={styles.contactContainer} style={{flex: 1, minWidth: 260}}>
          <ContactCode />
        </div>
        <form onSubmit={handleSubmit} style={{flex: 1, minWidth: 260, background: 'var(--article-bg)', borderRadius: 12, padding: '2rem', boxShadow: '0 2px 16px rgba(0,0,0,0.08)', display: 'flex', flexDirection: 'column', gap: '1.25rem'}}>
          <label style={{color: '#fff', fontWeight: 500, fontSize: '1.1rem'}}>Your Name
            <input type="text" value={name} onChange={e => setName(e.target.value)} required style={{width: '100%', marginTop: 6, padding: '0.7rem', borderRadius: 6, border: '1px solid #444', background: 'var(--background)', color: '#fff', fontSize: '1rem'}} />
          </label>
          <label style={{color: '#fff', fontWeight: 500, fontSize: '1.1rem'}}>Your Message / Needs
            <textarea value={message} onChange={e => setMessage(e.target.value)} required rows={5} style={{width: '100%', marginTop: 6, padding: '0.7rem', borderRadius: 6, border: '1px solid #444', background: 'var(--background)', color: '#fff', fontSize: '1rem', resize: 'vertical'}} />
          </label>
          <button type="submit" style={{background: 'var(--accent-color)', color: '#fff', border: 'none', borderRadius: 6, padding: '0.9rem 0', fontWeight: 600, fontSize: '1.1rem', cursor: 'pointer', marginTop: 8, transition: 'background 0.2s'}} disabled={status==='sending'}>
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>
          {status === 'sent' && <p style={{color: 'var(--accent-color)', marginTop: 8}}>Message sent successfully!</p>}
          {status === 'error' && <p style={{color: 'red', marginTop: 8}}>Failed to send. Please try again.</p>}
        </form>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Contact' },
  };
}

export default ContactPage;
