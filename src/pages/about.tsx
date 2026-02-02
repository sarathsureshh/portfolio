import SEO from "@/components/SEO";
import coverPhoto from "../../public/Sarath.jpeg";
import Image from "next/image";
import { FC } from "react";
import { motion } from "framer-motion";
import GlitchText from "@/components/GlitchText";

interface TimelineItem {
  year: string;
  title: string;
  company: string;
  description: string;
}

const timeline: TimelineItem[] = [
  {
    year: "2024",
    title: "Software Engineer",
    company: "Graas.ai",
    description:
      "Building scalable e-commerce analytics platforms with React, Node.js, and cloud technologies.",
  },
  {
    year: "2023",
    title: "Backend Developer",
    company: "Graas.ai",
    description: "Developed microservices architecture and REST APIs using Java and Python.",
  },
  {
    year: "2022",
    title: "Junior Developer",
    company: "Started Career",
    description:
      "Began my journey in software development, learning the fundamentals of web technologies.",
  },
];

const About: FC = () => {
  return (
    <>
      <SEO
        pageTitle="Sarath | About"
        pageDescription="Learn more about Sarath - Software Engineer specializing in full-stack development."
      />

      <main className="min-h-screen pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="font-mono text-neon-green text-sm mb-4">
              {"<"}
              <span className="text-neon-blue">About</span>
              {" />"}
            </div>
            <h1 className="text-5xl md:text-3xl font-bold">
              <GlitchText text="Who Am I?" className="text-gradient" delay={300} />
            </h1>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-1 gap-16 items-start">
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-neon-green/20 via-neon-blue/20 to-neon-purple/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative cyber-card p-2 overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-green via-neon-blue to-neon-purple" />

                  <Image
                    src={coverPhoto}
                    alt="Sarath"
                    className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-500"
                    priority
                  />

                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="cyber-card p-3 bg-cyber-dark/90 backdrop-blur-sm">
                      <div className="font-mono text-xs text-neon-green">
                        <span className="text-gray-500">location:</span> Coimbatore, TN
                      </div>
                      <div className="font-mono text-xs text-neon-blue mt-1">
                        <span className="text-gray-500">status:</span> Available for work
                      </div>
                    </div>
                  </div>
                </div>

                <motion.div
                  className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-neon-green"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div
                  className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-neon-blue"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                />
              </div>
            </motion.div>

            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="cyber-card p-6">
                <div className="font-mono text-sm text-gray-500 mb-4">{"// "}Introduction</div>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    <span className="text-neon-green font-mono">Howdy!</span> I&apos;m{" "}
                    <span className="text-neon-blue">Sarath Suresh</span>, your friendly
                    neighborhood Software Engineer based in Coimbatore, Tamil Nadu.
                  </p>
                  <p>
                    Currently riding the tech waves at{" "}
                    <span className="text-neon-purple">Graas.ai</span>, I wield my daily tools like
                    a coding maestro – <span className="font-mono text-neon-green">JavaScript</span>
                    , <span className="font-mono text-neon-green">Node.js</span>,{" "}
                    <span className="font-mono text-neon-blue">React</span>,{" "}
                    <span className="font-mono text-neon-blue">MongoDB</span>,{" "}
                    <span className="font-mono text-neon-purple">Java</span>, and{" "}
                    <span className="font-mono text-neon-purple">Python</span>.
                  </p>
                  <p>
                    My coding philosophy? <span className="text-neon-green">Ternary operators</span>{" "}
                    over if-else blocks any day. I&apos;m all about that sleek, concise code life.
                  </p>
                </div>
              </div>

              <div className="cyber-card p-6">
                <div className="font-mono text-sm text-gray-500 mb-4">{"// "}What I do</div>
                <div className="grid grid-cols-2 sm:grid-cols-1 gap-4">
                  {[
                    { label: "Frontend", value: "React, Next.js, TypeScript" },
                    { label: "Backend", value: "Node.js, Java, Python" },
                    { label: "Database", value: "MongoDB, PostgreSQL" },
                    { label: "DevOps", value: "Docker, AWS, CI/CD" },
                  ].map((item, index) => (
                    <motion.div
                      key={item.label}
                      className="p-3 border border-gray-800 hover:border-neon-green/50 transition-colors"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="font-mono text-xs text-neon-green mb-1">{item.label}</div>
                      <div className="text-sm text-gray-400">{item.value}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="mt-24"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-12">
              <div className="font-mono text-neon-green text-sm mb-4">
                {"<"}
                <span className="text-neon-blue">Journey</span>
                {" />"}
              </div>
              <h2 className="text-3xl font-bold text-gradient">Experience Timeline</h2>
            </div>

            <div className="relative">
              <div className="absolute left-1/2 lg:left-4 top-0 bottom-0 w-px bg-gradient-to-b from-neon-green via-neon-blue to-neon-purple" />

              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  className={`relative flex items-center gap-8 mb-12 ${
                    index % 2 === 0 ? "lg:flex-row" : "flex-row-reverse lg:flex-row"
                  }`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <div
                    className={`w-1/2 lg:w-full lg:pl-12 ${index % 2 === 0 ? "text-right lg:text-left" : "text-left"}`}
                  >
                    <div className="cyber-card p-6 inline-block">
                      <div className="font-mono text-neon-green text-sm mb-2">{item.year}</div>
                      <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                      <div className="text-neon-blue text-sm mb-3">{item.company}</div>
                      <p className="text-gray-400 text-sm">{item.description}</p>
                    </div>
                  </div>

                  <div className="absolute left-1/2 lg:left-4 -translate-x-1/2 w-4 h-4 bg-cyber-dark border-2 border-neon-green rounded-full z-10">
                    <motion.div
                      className="absolute inset-1 bg-neon-green rounded-full"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>

                  <div className="w-1/2 lg:hidden" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="mt-24 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="cyber-card p-8 max-w-2xl mx-auto">
              <div className="font-mono text-gray-500 text-sm mb-4">{"// "}Let&apos;s connect</div>
              <p className="text-gray-300 mb-6">
                Interested in working together? I&apos;m always open to discussing new projects,
                creative ideas, or opportunities to be part of your visions.
              </p>
              <motion.a
                href="/contact"
                className="inline-flex items-center gap-2 font-mono text-neon-green border border-neon-green px-6 py-3 hover:bg-neon-green hover:text-cyber-dark transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Get In Touch</span>
                <span>→</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </main>
    </>
  );
};

export default About;
