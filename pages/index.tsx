import { useState, useEffect } from 'react';
import Link from 'next/link';
import { VscArrowRight } from 'react-icons/vsc';

import styles from '@/styles/HomePage.module.css';

const DESIGNATION = 'AI/ML & Android Developer';

function TypingDesignation({ text }: { text: string }) {
  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let current = 0;
    let typingInterval: NodeJS.Timeout;
    let cursorInterval: NodeJS.Timeout;
    setTypedText('');
    setShowCursor(true);
    typingInterval = setInterval(() => {
      setTypedText(text.slice(0, current + 1));
      current++;
      if (current === text.length) {
        clearInterval(typingInterval);
        cursorInterval = setInterval(() => {
          setShowCursor((prev) => !prev);
        }, 500);
      }
    }, 80);
    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, [text]);

  return (
    <div style={{ display: 'flex', alignItems: 'center', minHeight: '2.5rem', fontFamily: 'monospace', fontSize: '1.3rem', margin: '0.5rem 0 1.5rem 0', color: 'var(--accent-color)' }}>
      {typedText}
      <span style={{
        display: 'inline-block',
        width: '1ch',
        color: 'var(--accent-color)',
        opacity: showCursor ? 1 : 0,
        fontWeight: 'bold',
        fontSize: '1.3rem',
        marginLeft: '2px',
      }}>|</span>
    </div>
  );
}

function Preloader() {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      background: 'rgba(20, 20, 30, 0.98)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999,
    }}>
      <div style={{
        border: '6px solid #222',
        borderTop: '6px solid var(--accent-color, #42a5f5)',
        borderRadius: '50%',
        width: 60,
        height: 60,
        animation: 'spin 1s linear infinite',
      }} />
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

export default function HomePage() {
  const [activeLineIndex, setActiveLineIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [typedDesignation, setTypedDesignation] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  // Elongated description
  const description = `Tech enthusiast. Creative thinker. Always building something impactful. I blend machine learning, Android development, and storytelling to solve real-world problems. Whether it’s leading MUNs, organizing hackathons, or kickstarting community ideas — I’m all about innovation, curiosity, and meaningful work.`;

  // Typing effect for designation
  useEffect(() => {
    let current = 0;
    const typingInterval: NodeJS.Timeout = setInterval(() => {
      setTypedDesignation(DESIGNATION.slice(0, current + 1));
      current++;
      if (current === DESIGNATION.length) {
        clearInterval(typingInterval);
        const cursorInterval: NodeJS.Timeout = setInterval(() => {
          setShowCursor((prev) => !prev);
        }, 500);
      }
    }, 80);
    return () => {
      clearInterval(typingInterval);
      // clearInterval(cursorInterval); // Only clear if defined
    };
  }, []);

  const codeLines = [
    { code: 'const HomePage = () => {', type: 'function' },
    {
      code: '  const [isLoaded, setIsLoaded] = useState(true);',
      type: 'variable',
    },
    { code: '  const developerInfo = {', type: 'variable' },
    { code: "    name: 'Prajwal Gunnala',", type: 'array-item' },
    { code: "    role: 'AI/ML & Android Developer',", type: 'array-item' },
    { code: "    bio: 'Tech enthusiast. Creative thinker. Always building something impactful. I blend machine learning, Android development, and storytelling to solve real-world problems. Whether it’s leading MUNs, organizing hackathons, or kickstarting community ideas — I’m all about innovation, curiosity, and meaningful work.',", type: 'array-item' },
    { code: '  };', type: 'array-end' },
    { code: '', type: 'blank' },
    { code: '  useEffect(() => {', type: 'nested-function' },
    {
      code: '    document.title = `${developerInfo.name} | Portfolio`;',
      type: 'return',
    },
    { code: '    setIsLoaded(true);', type: 'function-call' },
    { code: '  }, []);', type: 'close' },
    { code: '', type: 'blank' },
    { code: '  return (', type: 'return-object' },
    { code: '    <main className="hero-container">', type: 'object-method' },
    { code: '      <h1>{developerInfo.name}</h1>', type: 'object-method' },
    { code: '      <p>{developerInfo.role}</p>', type: 'object-method' },
    { code: '      <div className="cta">', type: 'object-method' },
    {
      code: '        <Link href="/projects">View Projects</Link>',
      type: 'object-method',
    },
    { code: '      </div>', type: 'object-method' },
    { code: '    </main>', type: 'object-method' },
    { code: '  );', type: 'close' },
    { code: '};', type: 'close-function' },
    { code: '', type: 'blank' },
    { code: 'export default HomePage;', type: 'function-call' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLineIndex((prev) => (prev + 1) % codeLines.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [codeLines.length]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200); // 1.2s preloader
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Preloader />;

  return (
    <div className={styles.heroLayout}>
      <div className={styles.container} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div className={styles.infoSection} style={{ alignItems: 'flex-start', textAlign: 'left', width: '75%' }}>
          <h1 className={styles.developerName} style={{ textAlign: 'left' }}>
            Prajwal <span className={styles.accentText}>Gunnala</span>
          </h1>
          {/* Typing effect for designation */}
          <TypingDesignation text="AI/ML & Flutter Mobile Developer" />
          <p className={styles.bio} style={{ textAlign: 'left', maxWidth: '75vw', width: '75vw', whiteSpace: 'normal' }}>
            {description}
          </p>
          <div className={styles.actionLinks} style={{ textAlign: 'left' }}>
            <Link href="/projects" className={styles.primaryLink}>
              View Projects <VscArrowRight />
            </Link>
          </div>
        </div>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-start', height: '100%' }}>
          <img src="/flutter.png" alt="Flutter Logo" style={{ maxWidth: '320px', width: '100%', height: 'auto', borderRadius: '12px', boxShadow: '0 4px 24px rgba(0,0,0,0.15)' }} />
        </div>
      </div>
      <div className={styles.decorElements}>
        <div className={styles.codeFlare}></div>
        <div className={styles.gridLines}></div>
        <div className={styles.codeBlock1}>{'{'}</div>
        <div className={styles.codeBlock2}>{'}'}</div>
        <div className={styles.codeBlock3}>{'<>'}</div>
        <div className={styles.codeBlock4}>{'/>'}</div>
        <div className={styles.orb1}></div>
        <div className={styles.orb2}></div>
        <div className={styles.orb3}></div>
        <div className={styles.codeSymbol1}>{'()'}</div>
        <div className={styles.codeSymbol2}>{'[]'}</div>
        <div className={styles.codeSymbol3}>{'=>'}</div>
        <div className={styles.dotPattern}></div>
        <div className={styles.mobileAccent}></div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: { title: 'Home' },
  };
}
