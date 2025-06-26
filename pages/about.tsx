const AboutPage = () => {
  const codeText = `<section>
    <p>
      Hello! My name is Prajwal and I enjoy creating things that solve real-world problems through AI and mobile technology. My interest in tech started when I realized that machines could be taught to understand human emotions and help people in meaningful ways. It turns out I enjoyed building AI solutions that make a difference more than just writing traditional code. So I dove deep into machine learning and Flutter development, and haven't looked back since.
    </p>
  </section>

  <section>
      <p>
        Fast-forward to today, and I've had the privilege of presenting my mental health AI chatbot "PYP - Prompt Your Problems" at Google's prestigious Bangalore Build With AI Event, leading the Android community at GDSC CMRIT, and winning hackathons with innovative solutions. I've also spent a year with AIESEC facilitating cross-cultural exchanges across 125+ countries, earning the Best Member Award for my contributions in global talent management and business development. My main focus these days is building AI-powered applications that don't just impress in demos, but actually help people - from mental health support to aviation safety. I'm always looking to collaborate with fellow innovators who believe technology should be a force for good.
      </p>
  </section>

  <section>
      <p>Here are a few technologies I've been working with recently:</p>
      <ul>
          <li>Python</li>
          <li>TensorFlow & LSTM</li>
          <li>Flutter & Dart</li>
          <li>Firebase</li>
          <li>Google Gemini AI</li>
          <li>Java</li>
      </ul>
  </section>`;

  return (
    <div style={{ width: '100%', minHeight: '100vh', textAlign: 'left', padding: '3rem 2vw', boxSizing: 'border-box', background: 'var(--background)' }}>
      <div style={{height: '20rem'}}></div>
      <div style={{fontWeight: 'bold', color: '#fff', fontSize: '2rem', marginBottom: '1.5rem', textAlign: 'left'}}>A Little about me</div>
      <pre style={{whiteSpace: 'pre-wrap', textAlign: 'left', maxWidth: '100%', fontSize: '1.1rem', color: '#fff', background: 'transparent', fontFamily: 'monospace', margin: 0, padding: 0}}>
        {codeText}
      </pre>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
