export interface Project {
  title: string;
  description: string;
  logo: string;
  link: string;
  slug: string;
}

export const projects: Project[] = [
  {
    title: 'PYP - Prompt Your Problems',
    description:
      'AI-powered mental health chatbot with Google Gemini AI, Firebase, Flutter, and Figma. Features expert consultations, healing games, and music therapy.',
    logo: '/logos/markdown_icon.svg',
    link: 'https://github.com/prajwal-gunnala/pyp',
    slug: 'pyp',
  },
  {
    title: 'BOUI SONGS',
    description:
      'Community-based music player app using Flutter, Firebase, Wix-hosted audio links. Features lyrics, queue management, and offline playback.',
    logo: '/logos/music.svg',
    link: '#',
    slug: 'boui-songs',
  },
  {
    title: 'Hard Landing Prediction System - E-pilot',
    description:
      'Hybrid LSTM-based system for predicting hard landings in commercial flights. Achieved 95% sensitivity and 96% specificity.',
    logo: '/logos/ai.svg',
    link: 'https://github.com/prajwal-gunnala/hard-landing-prediction',
    slug: 'hard-landing-prediction',
  },
];
