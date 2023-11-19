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
        <meta property="og:title" content="My Clothing Store" />
        <meta
          property="og:description"
          content="Come to my store for great apparel!"
        />
        <meta property="og:url" content="https://shemilkumar.com/" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
};

export default SEO;
