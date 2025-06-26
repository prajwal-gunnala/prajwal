import Head from 'next/head';

interface CustomHeadProps {
  title: string;
}

const CustomHead = ({ title }: CustomHeadProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Prajwal Gunnala is an avid full stack web developer building websites and applications you'd love to use"
      />
      <meta
        name="keywords"
        content="prajwal gunnala, prajwal, gunnala, web developer portfolio, prajwal web developer, prajwal developer, mern stack, prajwal gunnala portfolio, vscode-portfolio"
      />
      <meta property="og:title" content="Prajwal Gunnala's Portfolio" />
      <meta
        property="og:description"
        content="A full-stack developer building websites that you'd like to use."
      />
      <meta property="og:image" content="https://i.ibb.co/4Dt4gTr/Screenshot-from-2025-06-26-17-12-00.png" />
      <meta property="og:url" content="https://prajwal-gunnala.vercel.app/" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="https://i.ibb.co/4Dt4gTr/Screenshot-from-2025-06-26-17-12-00.png" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Prajwal Gunnala',
};
