import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Layout from "@/components/Layout";
import ParticleField from "@/components/ParticleField";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-mont",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`${spaceGrotesk.variable} ${jetBrainsMono.variable} font-mont min-h-screen bg-cyber-dark text-gray-100 relative overflow-hidden`}
      >
        <div className="fixed inset-0 bg-cyber-grid bg-cyber-grid opacity-30 pointer-events-none" />
        <div className="fixed inset-0 bg-gradient-to-b from-cyber-dark via-cyber-gray/20 to-cyber-dark pointer-events-none" />

        <ParticleField />

        <div className="scan-line" />

        <div className="relative z-10 px-32 lg:px-16 md:px-8 sm:px-4">
          <Layout>
            <Navbar />
            <AnimatePresence mode="wait">
              <motion.div
                key={router.pathname}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Component {...pageProps} />
              </motion.div>
            </AnimatePresence>
          </Layout>
        </div>

        <div className="fixed bottom-4 right-4 font-mono text-xs text-neon-green/30 pointer-events-none z-50">
          <div className="flex flex-col items-end gap-1">
            <span>v2.0.0</span>
            <span>SYSTEM://ONLINE</span>
          </div>
        </div>
      </main>
    </>
  );
}
