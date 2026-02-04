import SEO from "@/components/SEO";
import { motion, useScroll, useTransform } from "framer-motion";
import { FC, useRef } from "react";
import GlitchText from "@/components/GlitchText";

interface Experience {
  id: number;
  company: string;
  role: string;
  duration: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  techStack: string[];
  color: string;
  icon: string;
}

const experiences: Experience[] = [
  {
    id: 0,
    company: "Ernst and Young Global Delivery Services (EY GDS)",
    role: "Senior Software Engineer – API / Fullstack",
    duration: "Currently Employed",
    period: "Sep 2025 - Present",
    location: "India",
    description:
      "Designing and building high-throughput, data-intensive APIs for enterprise-scale platforms, focusing on performance, reliability, and cloud-native architectures within EY GDS.",
    achievements: [
      "Designed and developed multiple high-throughput REST APIs using FastAPI and Node.js to process and serve large-scale datasets efficiently",
      "Built a configurable task scheduler to orchestrate time-based and event-driven jobs for long-running and data-intensive workflows",
      "Implemented asynchronous and background processing patterns to handle heavy workloads without blocking API request lifecycles",
    ],
    techStack: [
      "FastAPI",
      "Python",
      "Kubernetes",
      "Azure storage",
      "OpenTelemetry",
      "SSQL",
      "Docker",
      "Nginx",
      "Azure Container Apps",
      "Git",
    ],
    color: "#ffe600",
    icon: "EYGDS",
  },
  {
    id: 1,
    company: "Justdial",
    role: "Software Engineer - Fullstack",
    duration: "1.8 year",
    period: "Feb 2024 - Sep 2025",
    location: "India",
    description:
      "Currently driving innovation at one of India's largest local search engines, working on scalable systems and modern web architectures.",
    achievements: [
      "Migrated multi-instance Node.js servers managed by PM2 to Docker, achieving streamlined deployments and improved scalability",
      "Engineered JWT validation and refresh mechanisms in OAuth 2.0 for stateless authentication",
      "Actively contributed to the 'Sales Genio' migration - An internal sales application from React v14 to NextJS",
      "Built a Python-based system to process on-demand bulk invoices using Apache Kafka as the queuing system",
      "Implemented MySQL connection pooling with automatic reconnection logic for transient fault tolerance",
      "Leveraged memory buffers for in-memory PDF bundling and direct cloud uploads via S3-compatible APIs",
      "Configured reverse proxies with Nginx for secure routing and load balancing of API traffic",
    ],
    techStack: [
      "ReactJS",
      "NodeJS",
      "NextJS",
      "MongoDB",
      "Docker",
      "Linux",
      "MySQL",
      "Kafka",
      "RabbitMQ",
      "Nginx",
    ],
    color: "#F26600",
    icon: "JD",
  },
  {
    id: 2,
    company: "Graas (Growth As A Service)",
    role: "Software Engineer - Fullstack",
    duration: "1 year",
    period: "Jan 2023 - Jan 2024",
    location: "India",
    description:
      "Contributed to an AI-powered e-commerce analytics platform, building data pipelines and crafting seamless user experiences.",
    achievements: [
      "Developed time-efficient Java-based APIs to retrieve and manage data through optimized SQL queries",
      "Engineered smart logic for acquiring Ads data from Facebook Ads and Google Ads, efficiently transferring it to NFS (S3 Bucket) storage",
      "Worked closely with queuing mechanisms like RabbitMQ and Apache Kafka for better messaging actions",
      "Crafted dynamic React components using Redux and Context API, resulting in highly efficient and maintainable user interfaces",
      "Containerised applications using Docker and deployed using Jenkins, showcasing expertise in modern CI/CD practices",
    ],
    techStack: [
      "ReactJS",
      "Java",
      "MongoDB",
      "Python",
      "NodeJS",
      "Snowflake DB",
      "Docker",
      "Jenkins",
      "Git",
    ],
    color: "#00d4ff",
    icon: "GR",
  },
  {
    id: 3,
    company: "Tata Consultancy Services",
    role: "AR/VR Developer",
    duration: "1 year 9 months",
    period: "May 2021 - Jan 2023",
    location: "India",
    description:
      "Started my professional journey diving deep into the immersive world of Augmented and Virtual Reality, building B2B solutions from inception to deployment.",
    achievements: [
      "Contributed to B2B Augmented Reality solutions, covering the entire process from inception to deployment",
      "Gained hands-on experience with AR Core, Vuforia, XR Tool Kit & Oculus SDKs",
      "Employed RESTful APIs along with reliable queuing methods like Kafka and MQTT",
      "Built immersive experiences that bridged the gap between physical and digital worlds",
    ],
    techStack: [
      "Unity",
      "C#",
      "Android Studio",
      "Vuforia",
      "AR Core",
      "Kotlin",
      "Git",
      "Azure",
      "Kafka",
      "MQTT",
    ],
    color: "#5F68C3",
    icon: "TCS",
  },
];

const StoryChapter: FC<{ experience: Experience; index: number }> = ({ experience, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 1]);
  const x = useTransform(scrollYProgress, [0, 0.5, 1], [index % 2 === 0 ? -50 : 50, 0, 0]);

  const isEven = index % 2 === 0;

  return (
    <motion.div ref={ref} className="relative mb-24 last:mb-0" style={{ opacity, scale, x }}>
      {/* Chapter Number */}
      <motion.div
        className="absolute -left-20 lg:left-0 lg:relative lg:mb-4 top-0 font-mono text-8xl lg:text-6xl font-bold opacity-10"
        style={{ color: experience.color }}
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 0.1, x: 0 }}
        viewport={{ once: true }}
      >
        {String(index + 1).padStart(2, "0")}
      </motion.div>

      <div className="grid grid-cols-12 gap-8 lg:gap-4">
        {/* Timeline Connector */}
        <div className="col-span-1 lg:hidden flex flex-col items-center">
          <motion.div
            className="w-4 h-4 rounded-full border-2 relative z-10"
            style={{ borderColor: experience.color, backgroundColor: "#0a0a0f" }}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <motion.div
              className="absolute inset-1 rounded-full"
              style={{ backgroundColor: experience.color }}
              animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
          <motion.div
            className="w-px flex-1 mt-2"
            style={{ backgroundColor: experience.color }}
            initial={{ height: 0, opacity: 0.3 }}
            whileInView={{ height: "100%", opacity: 0.3 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </div>

        {/* Content */}
        <motion.div
          className={`col-span-11 lg:col-span-12 ${isEven ? "" : ""}`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Header Card */}
          <div
            className="cyber-card p-6 mb-6 relative overflow-hidden group"
            style={{ borderColor: `${experience.color}30` }}
          >
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: `radial-gradient(circle at ${
                  isEven ? "left" : "right"
                }, ${experience.color}10, transparent 70%)`,
              }}
            />

            <div
              className="absolute top-0 left-0 w-full h-1"
              style={{
                background: `linear-gradient(90deg, ${experience.color}, transparent)`,
              }}
            />

            <div className="relative z-10">
              <div className="flex items-start justify-between flex-wrap gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span
                      className="text-xs font-mono font-bold px-2 py-1 border"
                      style={{ borderColor: experience.color, color: experience.color }}
                    >
                      {experience.icon}
                    </span>
                    <div>
                      <h3
                        className="text-2xl md:text-xl font-bold"
                        style={{ color: experience.color }}
                      >
                        {experience.company}
                      </h3>
                      <p className="text-gray-300 font-medium">{experience.role}</p>
                    </div>
                  </div>
                </div>

                <div className="text-right sm:text-left">
                  <div className="font-mono text-sm" style={{ color: experience.color }}>
                    {experience.period}
                  </div>
                  <div className="text-gray-500 text-sm">{experience.duration}</div>
                </div>
              </div>

              <p
                className="text-gray-400 mt-4 leading-relaxed italic border-l-2 pl-4"
                style={{ borderColor: `${experience.color}50` }}
              >
                &ldquo;{experience.description}&rdquo;
              </p>
            </div>
          </div>

          {/* Achievements */}
          <motion.div
            className="cyber-card p-6 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="font-mono text-sm text-gray-500 mb-4">{"// "}Key Achievements</div>

            <div className="space-y-3">
              {experience.achievements.map((achievement, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-3 group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                >
                  <motion.span
                    className="mt-2 w-2 h-2 rounded-full flex-shrink-0"
                    style={{ backgroundColor: experience.color }}
                    whileHover={{ scale: 1.5 }}
                  />
                  <p className="text-gray-300 text-sm leading-relaxed group-hover:text-white transition-colors">
                    {achievement}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            className="flex flex-wrap gap-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            {experience.techStack.map((tech, i) => (
              <motion.span
                key={tech}
                className="px-3 py-1 text-xs font-mono border bg-opacity-5"
                style={{
                  borderColor: `${experience.color}40`,
                  color: experience.color,
                  backgroundColor: `${experience.color}10`,
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + i * 0.05 }}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: `${experience.color}20`,
                }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const Experience: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <>
      <SEO
        pageTitle="Sarath | Experience"
        pageDescription="My professional journey - From AR/VR development to Full-Stack Engineering"
      />

      <main className="min-h-screen pt-32 pb-20" ref={containerRef}>
        {/* Progress Bar */}
        <div className="fixed left-8 top-1/2 -translate-y-1/2 h-48 w-1 bg-gray-800 rounded-full overflow-hidden z-40 lg:hidden">
          <motion.div
            className="w-full bg-gradient-to-b from-neon-green via-neon-blue to-neon-purple rounded-full"
            style={{ height: progressHeight }}
          />
        </div>

        <div className="max-w-5xl mx-auto px-4">
          {/* Header */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="font-mono text-neon-green text-sm mb-4">
              {"<"}
              <span className="text-neon-blue">Experience</span>
              {" />"}
            </div>
            <h1 className="text-5xl md:text-3xl font-bold mb-6">
              <GlitchText text="My Journey" className="text-gradient" delay={300} />
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
              From building immersive AR/VR experiences to architecting scalable full-stack
              solutions — here&apos;s the story of my professional evolution.
            </p>

            {/* Stats */}
            <motion.div
              className="flex justify-center gap-8 mt-10 flex-wrap"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {[
                { label: "Years of Experience", value: "4+" },
                { label: "Companies", value: "4" },
                { label: "Technologies", value: "15+" },
              ].map((stat) => (
                <div key={stat.label} className="text-center px-6 py-4 border border-gray-800">
                  <div className="text-3xl font-bold text-gradient">{stat.value}</div>
                  <div className="text-gray-500 text-sm font-mono">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Story Intro */}
          <motion.div
            className="cyber-card p-8 mb-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="font-mono text-sm text-gray-500 mb-4">{`// The Beginning`}</div>
            <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
              Every great story has a beginning. Mine started in{" "}
              <span className="text-neon-purple">May 2021</span> when I stepped into the world of{" "}
              <span className="text-neon-purple">Augmented Reality</span> at TCS. Little did I know,
              this was just the first chapter of an exciting adventure through the realms of
              technology...
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative pl-8 lg:pl-0">
            {/* Vertical Line */}
            <div className="absolute left-[7px] lg:hidden top-0 bottom-0 w-px bg-gradient-to-b from-neon-purple via-neon-blue to-neon-green opacity-20" />

            {/* Experience Items - Latest first */}
            {experiences.map((exp, index) => (
              <StoryChapter key={exp.id} experience={exp} index={index} />
            ))}
          </div>

          {/* Current Status */}
          <motion.div
            className="mt-20 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="cyber-card p-8 inline-block relative overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-neon-green/5 via-neon-blue/5 to-neon-purple/5"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 5, repeat: Infinity }}
              />

              <div className="relative z-10">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <motion.div
                    className="w-3 h-3 rounded-full bg-neon-green"
                    animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  <span className="font-mono text-neon-green text-sm">CURRENTLY ACTIVE</span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">Writing the Next Chapter</h3>
                <p className="text-gray-400 max-w-lg">
                  The journey continues at <span className="text-neon-green">EY GDS</span>, where
                  I&apos;m pushing boundaries and building systems that scale.
                </p>

                <div className="mt-6 font-mono text-sm text-gray-600">
                  <span className="text-neon-blue">const</span>{" "}
                  <span className="text-white">nextChapter</span> ={" "}
                  <span className="text-neon-green">&quot;loading...&quot;</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-500 mb-6">Want to be part of the next chapter?</p>
            <motion.a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 font-mono text-sm uppercase tracking-wider text-cyber-dark bg-neon-green hover:bg-neon-blue transition-colors duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Let&apos;s Connect</span>
              <span>→</span>
            </motion.a>
          </motion.div>
        </div>
      </main>
    </>
  );
};

export default Experience;
