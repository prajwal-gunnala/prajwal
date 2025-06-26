import { useState, useEffect } from 'react';
import Link from 'next/link';
import { VscArrowRight } from 'react-icons/vsc';
import styles from '@/styles/HomePage.module.css';

const DESIGNATION = 'AI/ML & Flutter Mobile Developer';

// Fixed typing effect component with proper const declarations and effect cleanup
function TypingDesignation({ text }: { text: string }) {
  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let current = 0;
    // Using const for interval
    const typingInterval = setInterval(() => {
      setTypedText(text.slice(0, current + 1));
      current++;
      if (current === text.length) {
        clearInterval(typingInterval);
      }
    }, 80);
    
    // Separate effect for cursor blinking to avoid linting issues
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    
    // Proper cleanup for both intervals
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

// Simple preloader component
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
  const [loading, setLoading] = useState(true);
  
  // Bio description
  const description = "Tech enthusiast. Creative thinker. Always building something impactful. I blend machine learning, Android development, and storytelling to solve real-world problems. Whether it's leading MUNs, organizing hackathons, or kickstarting community ideas — I'm all about innovation, curiosity, and meaningful work.";

  // Preloader timer
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
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
          <TypingDesignation text={DESIGNATION} />
          <p className={styles.bio} style={{ textAlign: 'left', maxWidth: '75vw', width: '75vw', whiteSpace: 'normal' }}>
            {description}
          </p>
          <div className={styles.actionLinks} style={{ textAlign: 'left' }}>
            <Link href="/projects" className={styles.primaryLink}>
              View Projects <VscArrowRight />
            </Link>
          </div>
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
