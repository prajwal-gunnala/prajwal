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
  {
    title: 'Driwwwle',
    description:
      'Discover creative websites and developers. A portal for you to share your projects.',
    logo: '/logos/driwwwle.svg',
    link: 'https://github.com/prajwalcool/driwwwle',
    slug: 'driwwwle',
  },
  {
    title: 'VSCode Portfolio',
    description:
      'A Visual Studio Code themed developer portfolio built with Next.js and CSS Modules.',
    logo: '/logos/vsc.svg',
    link: 'https://github.com/prajwalcool/vscode-portfolio',
    slug: 'vscode-portfolio',
  },
  {
    title: 'Subtrackt',
    description:
      'A simple and elegant way to track your subscriptions and save money.',
    logo: '/logos/subtrackt.svg',
    link: 'https://github.com/prajwalcool/subtrackt',
    slug: 'subtrackt',
  },
  {
    title: 'Coolify Deployments',
    description:
      'VSCode extension to track and deploy your Coolify applications.',
    logo: '/logos/coolify.svg',
    link: 'https://github.com/prajwalcool/coolify-vscode-extension',
    slug: 'coolify-vscode-extension',
  },
];
