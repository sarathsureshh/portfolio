import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { FC, useState } from "react";
import GlitchText from "@/components/GlitchText";
import { GithubIcon, LinkArrow } from "@/components/assets/Icons";

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  featured: boolean;
  category: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Analytics Platform",
    description:
      "A comprehensive analytics dashboard for e-commerce businesses. Built with React and Node.js, featuring real-time data visualization, inventory management, and sales forecasting.",
    tech: ["React", "Node.js", "MongoDB", "Redis", "AWS"],
    github: "https://github.com/sarathsureshh",
    featured: true,
    category: "fullstack",
  },
  {
    id: 2,
    title: "API Gateway Service",
    description:
      "Microservices API gateway handling authentication, rate limiting, and request routing for distributed systems.",
    tech: ["Java", "Spring Boot", "Docker", "Kubernetes"],
    github: "https://github.com/sarathsureshh",
    featured: true,
    category: "backend",
  },
  {
    id: 3,
    title: "Real-time Chat Application",
    description:
      "WebSocket-based chat application with end-to-end encryption, file sharing, and group messaging capabilities.",
    tech: ["TypeScript", "Socket.io", "React", "PostgreSQL"],
    github: "https://github.com/sarathsureshh",
    live: "https://github.com/sarathsureshh",
    featured: true,
    category: "fullstack",
  },
  {
    id: 4,
    title: "AR Product Visualizer",
    description:
      "Augmented Reality application allowing users to visualize products in their real environment before purchase.",
    tech: ["Unity", "AR Core", "C#", "Vuforia"],
    github: "https://github.com/sarathsureshh",
    featured: true,
    category: "ar-vr",
  },
  {
    id: 5,
    title: "Task Management CLI",
    description:
      "Command-line task management tool with project tracking, time logging, and productivity analytics.",
    tech: ["Python", "Click", "SQLite"],
    github: "https://github.com/sarathsureshh",
    featured: false,
    category: "tools",
  },
  {
    id: 6,
    title: "Portfolio Website",
    description:
      "This very website you're looking at! Built with Next.js, Framer Motion, and a lot of caffeine.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    github: "https://github.com/sarathsureshh",
    live: "https://sarath.dev",
    featured: false,
    category: "frontend",
  },
  {
    id: 7,
    title: "Invoice Processing System",
    description:
      "Python-based system to process on-demand bulk invoices using Apache Kafka, with in-memory PDF bundling and S3 uploads.",
    tech: ["Python", "Kafka", "AWS S3", "Docker"],
    github: "https://github.com/sarathsureshh",
    featured: false,
    category: "backend",
  },
  {
    id: 8,
    title: "VR Training Simulator",
    description:
      "Virtual Reality training application for industrial equipment operation, featuring realistic physics and haptic feedback.",
    tech: ["Unity", "Oculus SDK", "C#", "XR Toolkit"],
    github: "https://github.com/sarathsureshh",
    featured: false,
    category: "ar-vr",
  },
];

const categories = [
  { id: "all", label: "All Projects" },
  { id: "fullstack", label: "Full Stack" },
  { id: "backend", label: "Backend" },
  { id: "frontend", label: "Frontend" },
  { id: "ar-vr", label: "AR/VR" },
  { id: "tools", label: "Tools" },
];

const ProjectCard: FC<{ project: Project; index: number }> = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="cyber-card h-full p-6 relative overflow-hidden group"
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-neon-green/5 via-transparent to-neon-blue/5"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />

        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-green via-neon-blue to-neon-purple opacity-50 group-hover:opacity-100 transition-opacity" />

        <div className="relative z-10">
          <div className="flex items-start justify-between mb-4">
            <div className="font-mono text-xs text-gray-500">
              <span className="text-neon-green">project</span>
              <span className="text-gray-600">[</span>
              <span className="text-neon-blue">{String(index).padStart(2, "0")}</span>
              <span className="text-gray-600">]</span>
            </div>

            <div className="flex items-center gap-3">
              {project.github && (
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-neon-green transition-colors"
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  <GithubIcon className="w-5 h-5" />
                </motion.a>
              )}
              {project.live && (
                <motion.a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-neon-blue transition-colors"
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  <LinkArrow className="w-5 h-5" />
                </motion.a>
              )}
            </div>
          </div>

          <div className="mb-3">
            <span className="text-xs font-mono px-2 py-1 rounded border border-neon-purple/30 text-neon-purple/70">
              {categories.find((c) => c.id === project.category)?.label}
            </span>
          </div>

          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon-green transition-colors">
            {project.title}
          </h3>

          <p className="text-gray-400 text-sm mb-6 leading-relaxed">{project.description}</p>

          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs font-mono text-neon-green/70 border border-neon-green/20 bg-neon-green/5"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <motion.div
          className="absolute -bottom-1 -right-1 w-8 h-8 border-b-2 border-r-2 border-neon-green/30 group-hover:border-neon-green transition-colors"
          animate={isHovered ? { scale: [1, 1.1, 1] } : {}}
          transition={{ duration: 0.5 }}
        />
      </motion.div>
    </motion.div>
  );
};

const Projects: FC = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((p) => p.category === activeCategory);

  const featuredProjects = filteredProjects.filter((p) => p.featured);
  const otherProjects = filteredProjects.filter((p) => !p.featured);

  return (
    <>
      <SEO
        pageTitle="Sarath | Projects"
        pageDescription="Explore my projects - from web applications to AR/VR experiences and developer tools."
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
              <span className="text-neon-blue">Projects</span>
              {" />"}
            </div>
            <h1 className="text-5xl md:text-3xl font-bold mb-4">
              <GlitchText text="Things I've Built" className="text-gradient" delay={300} />
            </h1>
            <p className="text-gray-400 max-w-lg mx-auto">
              A selection of projects I&apos;ve worked on, from full-stack applications to AR/VR
              experiences and developer tools.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 font-mono text-sm border transition-all duration-300 ${
                  activeCategory === category.id
                    ? "border-neon-green bg-neon-green/10 text-neon-green"
                    : "border-gray-700 text-gray-400 hover:border-neon-green/50 hover:text-neon-green"
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {category.label}
              </motion.button>
            ))}
          </motion.div>

          {featuredProjects.length > 0 && (
            <motion.div
              className="mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <div className="font-mono text-sm text-gray-500 mb-6">{"// "}Featured projects</div>
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-6">
                {featuredProjects.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))}
              </div>
            </motion.div>
          )}

          {otherProjects.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="font-mono text-sm text-gray-500 mb-6">
                {"// "}Other noteworthy projects
              </div>
              <div className="grid grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-6">
                {otherProjects.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={featuredProjects.length + index}
                  />
                ))}
              </div>
            </motion.div>
          )}

          {filteredProjects.length === 0 && (
            <motion.div
              className="text-center py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="font-mono text-gray-500">No projects found in this category yet.</div>
            </motion.div>
          )}

          <motion.div
            className="mt-20 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="cyber-card p-8 inline-block">
              <div className="font-mono text-sm text-gray-500 mb-4">{"// "}Want to see more?</div>
              <motion.a
                href="https://github.com/sarathsureshh"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 font-mono text-sm uppercase tracking-wider text-neon-green border border-neon-green hover:bg-neon-green hover:text-cyber-dark transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <GithubIcon className="w-5 h-5" />
                <span>View GitHub Profile</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Currently Working On */}
          <motion.div
            className="mt-16 cyber-card p-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-6">
              <motion.div
                className="w-3 h-3 rounded-full bg-neon-green"
                animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <div className="font-mono text-sm text-gray-400">Currently working on...</div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-1 gap-6">
              <div className="p-4 border border-gray-800 hover:border-neon-green/30 transition-colors">
                <div className="font-mono text-neon-green text-sm mb-2">Side Project</div>
                <div className="text-white font-bold mb-2">Developer Productivity Tool</div>
                <p className="text-gray-400 text-sm">
                  Building a tool to help developers track their coding habits and improve
                  productivity.
                </p>
              </div>
              <div className="p-4 border border-gray-800 hover:border-neon-blue/30 transition-colors">
                <div className="font-mono text-neon-blue text-sm mb-2">Learning</div>
                <div className="text-white font-bold mb-2">Rust & System Programming</div>
                <p className="text-gray-400 text-sm">
                  Exploring low-level programming and building performant CLI tools.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </>
  );
};

export default Projects;
