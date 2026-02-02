import SEO from "@/components/SEO";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import GlitchText from "@/components/GlitchText";
import TypewriterText from "@/components/TypewriterText";
import CyberButton from "@/components/CyberButton";
import TechStack from "@/components/TechStack";
import { GithubIcon, LinkedInIcon, LinkArrow } from "@/components/assets/Icons";
import { useRef } from "react";

const TerminalLine = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    className="font-mono text-sm text-gray-400 flex items-center gap-2"
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay, duration: 0.5 }}
  >
    <span className="text-neon-green">$</span>
    {children}
  </motion.div>
);

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const roles = [
    "Full-Stack Developer",
    "Backend Engineer",
    "API Architect",
    "Problem Solver",
    "Code Enthusiast",
  ];

  return (
    <>
      <SEO
        pageTitle="Sarath | Software Engineer"
        pageDescription="Full-stack developer specializing in building exceptional digital experiences. Currently focused on building scalable applications."
      />

      <div ref={containerRef} className="relative">
        <motion.main
          className="min-h-screen flex flex-col items-center justify-center relative pt-20"
          style={{ y, opacity }}
        >
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
            <motion.div
              className="text-[20vw] font-bold text-neon-green/[0.02] select-none whitespace-nowrap"
              animate={{ x: [0, -100, 0] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              DEVELOPER DEVELOPER DEVELOPER
            </motion.div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="cyber-card inline-block px-6 py-3 mb-6">
                <TerminalLine>
                  <span className="text-gray-500">whoami</span>
                </TerminalLine>
                <motion.div
                  className="text-neon-green font-mono text-sm mt-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  sarath@dev:~# Software Engineer
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <h1 className="text-6xl md:text-4xl sm:text-3xl font-bold leading-tight">
                <span className="text-gray-100">Hey, I&apos;m </span>
                <GlitchText text="Sarath" className="text-gradient-animated" delay={500} />
              </h1>

              <motion.div
                className="text-2xl md:text-xl sm:text-lg font-mono"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <span className="text-gray-500">{"<"}</span>
                <TypewriterText texts={roles} className="text-neon-blue" />
                <span className="text-gray-500">{" />"}</span>
              </motion.div>

              <motion.p
                className="text-gray-400 text-lg md:text-base max-w-2xl mx-auto mt-6 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
              >
                I craft <span className="text-neon-green">digital experiences</span> that merge
                creativity with code. Specializing in{" "}
                <span className="text-neon-blue">JavaScript</span>,{" "}
                <span className="text-neon-purple">React</span>, and building scalable backend
                systems.
              </motion.p>
            </motion.div>

            <motion.div
              className="flex flex-wrap items-center justify-center gap-4 mt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              <CyberButton text="My Journey" href="/experience" variant="primary" />
              <CyberButton
                text="Download CV"
                href="/resume.pdf"
                icon={<LinkArrow className="w-4" />}
                variant="secondary"
                external
              />
              <CyberButton text="Contact Me" href="/contact" variant="outline" />
            </motion.div>

            <motion.div
              className="flex items-center justify-center gap-6 mt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              <motion.a
                href="https://github.com/sarathsureshh"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-gray-700 text-gray-400 hover:text-neon-green hover:border-neon-green transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <GithubIcon className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/sarathsureshh"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-gray-700 text-gray-400 hover:text-neon-blue hover:border-neon-blue transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <LinkedInIcon className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="mailto:sarathsuresh9360@gmail.com"
                className="font-mono text-sm text-gray-500 hover:text-neon-green transition-colors border-b border-transparent hover:border-neon-green"
                whileHover={{ y: -2 }}
              >
                sarathsuresh9360@gmail.com
              </motion.a>
            </motion.div>

            <motion.div
              className="absolute bottom-8 left-1/2 -translate-x-1/2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 0.8 }}
            >
              <motion.div
                className="flex flex-col items-center gap-2 text-gray-500"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="font-mono text-xs">scroll down</span>
                <div className="w-px h-8 bg-gradient-to-b from-neon-green to-transparent" />
              </motion.div>
            </motion.div>
          </div>
        </motion.main>

        <section className="min-h-screen flex flex-col items-center justify-center py-20">
          <TechStack />

          <motion.div
            className="mt-16 max-w-3xl mx-auto px-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="cyber-card p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-green via-neon-blue to-neon-purple" />

              <div className="font-mono text-sm text-gray-500 mb-4">{"// "}Quick stats</div>

              <div className="grid grid-cols-3 sm:grid-cols-1 gap-8">
                <motion.div className="text-center" whileHover={{ scale: 1.05 }}>
                  <div className="text-4xl font-bold text-gradient mb-2">5+</div>
                  <div className="text-gray-400 text-sm font-mono">Years Experience</div>
                </motion.div>
                <motion.div className="text-center" whileHover={{ scale: 1.05 }}>
                  <div className="text-4xl font-bold text-gradient mb-2">20+</div>
                  <div className="text-gray-400 text-sm font-mono">Projects Built</div>
                </motion.div>
                <motion.div className="text-center" whileHover={{ scale: 1.05 }}>
                  <div className="text-4xl font-bold text-gradient mb-2">∞</div>
                  <div className="text-gray-400 text-sm font-mono">Lines of Code</div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link
              href="/about"
              className="inline-flex items-center gap-2 font-mono text-neon-green hover:text-neon-blue transition-colors group"
            >
              <span>Learn more about me</span>
              <motion.span
                className="inline-block"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                →
              </motion.span>
            </Link>
          </motion.div>
        </section>
      </div>
    </>
  );
}
