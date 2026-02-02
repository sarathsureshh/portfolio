import { FC } from "react";
import { motion } from "framer-motion";

interface Tech {
  name: string;
  icon: string;
  color: string;
}

const technologies: Tech[] = [
  { name: "JavaScript", icon: "JS", color: "#f7df1e" },
  { name: "TypeScript", icon: "TS", color: "#3178c6" },
  { name: "React", icon: "⚛", color: "#61dafb" },
  { name: "Next.js", icon: "N", color: "#ffffff" },
  { name: "Node.js", icon: "⬢", color: "#339933" },
  { name: "Python", icon: "🐍", color: "#3776ab" },
  { name: "Java", icon: "☕", color: "#ed8b00" },
  { name: "MongoDB", icon: "🍃", color: "#47a248" },
  { name: "PostgreSQL", icon: "🐘", color: "#336791" },
  { name: "Docker", icon: "🐳", color: "#2496ed" },
  { name: "AWS", icon: "☁", color: "#ff9900" },
  { name: "Git", icon: "⎇", color: "#f05032" },
];

const TechStack: FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      className="py-16"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.h2
        className="text-2xl font-mono text-center mb-12 text-neon-green"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {"<"}
        <span className="text-neon-blue">TechStack</span>
        {" />"}
      </motion.h2>

      <motion.div
        className="grid grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 max-w-4xl mx-auto px-4"
        variants={containerVariants}
      >
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            className="relative group"
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <div
              className="cyber-card p-4 flex flex-col items-center gap-2 transition-all duration-300"
              style={{
                boxShadow: `0 0 0 1px ${tech.color}20`,
              }}
            >
              <motion.div
                className="text-3xl"
                style={{ color: tech.color }}
                whileHover={{
                  textShadow: `0 0 20px ${tech.color}, 0 0 40px ${tech.color}`,
                }}
              >
                {tech.icon}
              </motion.div>
              <span className="text-xs font-mono text-gray-400 group-hover:text-white transition-colors">
                {tech.name}
              </span>

              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at center, ${tech.color}10 0%, transparent 70%)`,
                }}
              />
            </div>

            <motion.div
              className="absolute -inset-px rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: `linear-gradient(135deg, ${tech.color}40, transparent, ${tech.color}40)`,
              }}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default TechStack;
