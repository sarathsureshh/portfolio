import SEO from "@/components/SEO";
import { GithubIcon, LinkedInIcon } from "@/components/assets/Icons";
import { motion } from "framer-motion";
import { FC, useState } from "react";
import GlitchText from "@/components/GlitchText";

interface SocialLink {
  name: string;
  href: string;
  icon: JSX.Element;
  color: string;
  handle: string;
}

const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    href: "https://github.com/sarathsureshh",
    icon: <GithubIcon className="w-6 h-6" />,
    color: "#00ff88",
    handle: "@sarathsureshh",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/sarathsureshh",
    icon: <LinkedInIcon className="w-6 h-6" />,
    color: "#00d4ff",
    handle: "/in/sarathsureshh",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/sarath.sureshh",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
    color: "#ff00ff",
    handle: "@sarath.sureshh",
  },
];

const Contact: FC = () => {
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const email = "sarathsuresh9360@gmail.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <SEO
        pageTitle="Sarath | Contact"
        pageDescription="Get in touch with Sarath - Software Engineer"
      />

      <main className="min-h-screen pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="font-mono text-neon-green text-sm mb-4">
              {"<"}
              <span className="text-neon-blue">Contact</span>
              {" />"}
            </div>
            <h1 className="text-5xl md:text-3xl font-bold mb-4">
              <GlitchText text="Get In Touch" className="text-gradient" delay={300} />
            </h1>
            <p className="text-gray-400 max-w-lg mx-auto">
              Have a project in mind or just want to say hi? My inbox is always open. Whether
              it&apos;s a question or just a hello, I&apos;ll get back to you!
            </p>
          </motion.div>

          <motion.div
            className="cyber-card p-8 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="font-mono text-sm text-gray-500 mb-6">{"// "}Primary contact</div>

            <div className="flex flex-col items-center">
              <motion.div
                className="relative group cursor-pointer mb-4"
                onClick={copyEmail}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="absolute -inset-4 bg-neon-green/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />

                <div className="relative p-6 border border-gray-800 group-hover:border-neon-green/50 transition-all duration-300 bg-cyber-dark">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 flex items-center justify-center border border-neon-green/50 text-neon-green">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="font-mono text-xs text-gray-500 mb-1">Email</div>
                      <div className="text-lg text-neon-green font-mono">{email}</div>
                    </div>
                  </div>

                  <motion.div
                    className="absolute top-2 right-2 text-xs font-mono"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: copied ? 1 : 0 }}
                  >
                    <span className="text-neon-green">Copied!</span>
                  </motion.div>
                </div>

                <div className="text-center mt-3 font-mono text-xs text-gray-500">
                  Click to copy
                </div>
              </motion.div>

              <motion.a
                href={`mailto:${email}`}
                className="mt-4 inline-flex items-center gap-2 px-8 py-4 font-mono text-sm uppercase tracking-wider text-cyber-dark bg-neon-green hover:bg-neon-blue transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Send me an email</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            className="cyber-card p-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="font-mono text-sm text-gray-500 mb-6">{"// "}Connect with me</div>

            <div className="grid grid-cols-3 sm:grid-cols-1 gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative p-6 border border-gray-800 hover:border-current transition-all duration-300 group"
                  style={{
                    color: hoveredSocial === social.name ? social.color : undefined,
                    borderColor: hoveredSocial === social.name ? social.color : undefined,
                  }}
                  onMouseEnter={() => setHoveredSocial(social.name)}
                  onMouseLeave={() => setHoveredSocial(null)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                    style={{ backgroundColor: social.color }}
                  />

                  <div className="relative flex flex-col items-center text-center gap-3">
                    <div
                      className="transition-transform duration-300 group-hover:scale-110"
                      style={{ color: hoveredSocial === social.name ? social.color : "#9ca3af" }}
                    >
                      {social.icon}
                    </div>
                    <div>
                      <div className="font-bold text-white">{social.name}</div>
                      <div className="font-mono text-xs text-gray-500">{social.handle}</div>
                    </div>
                  </div>

                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5"
                    style={{ backgroundColor: social.color }}
                    initial={{ width: "0%" }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <div className="cyber-card p-6 inline-block">
              <div className="font-mono text-sm text-gray-500">
                <span className="text-neon-green">const</span>{" "}
                <span className="text-neon-blue">response</span> ={" "}
                <span className="text-neon-purple">await</span>{" "}
                <span className="text-white">sarath</span>.
                <span className="text-neon-green">getInTouch</span>
                <span className="text-gray-400">(</span>
                <span className="text-neon-orange">&quot;you&quot;</span>
                <span className="text-gray-400">)</span>;
              </div>
              <motion.div
                className="font-mono text-xs text-gray-600 mt-2"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {`// I typically respond within 24 hours`}
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="mt-12 flex justify-center gap-8 text-gray-600 font-mono text-xs"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <div>
              <span className="text-neon-green">Location:</span> Coimbatore, India
            </div>
            <div>
              <span className="text-neon-blue">Timezone:</span> IST (UTC+5:30)
            </div>
          </motion.div>
        </div>
      </main>
    </>
  );
};

export default Contact;
