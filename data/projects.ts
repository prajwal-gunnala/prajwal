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
    link: 'https://github.com/prajwal-gunnala/epilot',
    slug: 'hard-landing-prediction',
  },
  {
    title: 'Fitto Kraft 🏋️‍♂️🏥🏆',
    description:
      'Flutter-based athlete management app that empowers Indian athletes with personalized fitness plans, injury care, tournament tracking, and career support. Built with Gemini AI and Firebase, it offers a unified, tech-enabled solution for holistic athlete development.',
    logo: '/logos/fitness.svg', // You may want to add a suitable logo in public/logos/
    link: 'https://github.com/prajwal-gunnala/fitto_kraft',
    slug: 'fitto-kraft',
  },
];
