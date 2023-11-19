import Head from "next/head";
import { FC } from "react";

interface SEOProps {
  pageTitle: string;
  pageDescription: string;
}

const SEO: FC<SEOProps> = ({ pageTitle, pageDescription }) => {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content="Sarath's portfolio" />
        <meta property="og:description" content="Checkout sarath's portfolio" />
        <meta property="og:url" content="https://sarathsureshh.vercel.app/" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
};

export default SEO;
