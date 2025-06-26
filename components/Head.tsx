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
        content="Prajwal Gunnala is a flutter app developer building applications you'd love to use"
      />
      <meta
        name="keywords"
        content="prajwal gunnala, prajwal, gunnala, flutter developer portfolio, prajwal app developer, prajwal developer, app dev full stack, prajwal gunnala portfolio"
      />
      <meta property="og:title" content="Prajwal Gunnala's Portfolio" />
      <meta
        property="og:description"
        content="A flutter developer building mobile applications that you'd like to use."
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
