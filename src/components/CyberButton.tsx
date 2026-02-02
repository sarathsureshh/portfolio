import { FC, ReactNode } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface CyberButtonProps {
  text: string;
  href: string;
  icon?: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  external?: boolean;
  className?: string;
}

const CyberButton: FC<CyberButtonProps> = ({
  text,
  href,
  icon,
  variant = "primary",
  external = false,
  className = "",
}) => {
  const baseStyles = `
    relative overflow-hidden px-6 py-3 font-mono text-sm font-semibold uppercase tracking-wider
    transition-all duration-300 ease-out group
  `;

  const variants = {
    primary: `
      bg-transparent border-2 border-neon-green text-neon-green
      hover:bg-neon-green hover:text-cyber-dark hover:shadow-neon-green
      before:absolute before:inset-0 before:bg-neon-green/10
    `,
    secondary: `
      bg-neon-green/10 border border-neon-green/50 text-neon-green
      hover:bg-neon-green/20 hover:border-neon-green hover:shadow-cyber
    `,
    outline: `
      bg-transparent border border-neon-blue/50 text-neon-blue
      hover:bg-neon-blue/10 hover:border-neon-blue hover:shadow-neon-blue
    `,
  };

  const content = (
    <motion.span
      className={`${baseStyles} ${variants[variant]} ${className} flex items-center gap-2`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <span className="absolute inset-0 overflow-hidden">
        <span className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-current" />
        <span className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-current" />
        <span className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-current" />
        <span className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-current" />
      </span>

      <motion.span
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
        initial={{ x: "-100%" }}
        whileHover={{ x: "100%" }}
        transition={{ duration: 0.5 }}
      />

      <span className="relative z-10 flex items-center gap-2">
        {text}
        {icon && <span className="w-4 h-4">{icon}</span>}
      </span>

      <span className="absolute -bottom-px left-0 w-full h-px bg-gradient-to-r from-transparent via-current to-transparent opacity-50" />
    </motion.span>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return <Link href={href}>{content}</Link>;
};

export default CyberButton;
