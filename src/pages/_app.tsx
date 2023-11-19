import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Montserrat } from "next/font/google";
import Navbar from "@/components/Navbar";
import Layout from "@/components/Layout";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`${montserrat.variable} font-mont min-h-screen bg-light text-dark dark:text-light dark:bg-dark z-0 px-32 lg:px-24 md:px-16 sm:px-4
        dark:bg-gradient-to-b dark:from-dark dark:via-fuchsia-950 dark:to-dark`}
      >
        <Layout>
          <Navbar />
          <Component {...pageProps} />
        </Layout>
      </main>
    </>
  );
}
