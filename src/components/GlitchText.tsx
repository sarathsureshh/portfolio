import { FC, useEffect, useState } from "react";
import { motion } from "framer-motion";

interface GlitchTextProps {
  text: string;
  className?: string;
  delay?: number;
}

const GlitchText: FC<GlitchTextProps> = ({ text, className = "", delay = 0 }) => {
  const [displayText, setDisplayText] = useState("");
  const [isGlitching, setIsGlitching] = useState(false);
  const chars = "!@#$%^&*()_+-=[]{}|;:',.<>?/\\`~0123456789";

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let interval: NodeJS.Timeout;
    let currentIndex = 0;

    timeout = setTimeout(() => {
      interval = setInterval(() => {
        if (currentIndex <= text.length) {
          const revealed = text.slice(0, currentIndex);
          const remaining = text.slice(currentIndex);
          const glitched = remaining
            .split("")
            .map(() => chars[Math.floor(Math.random() * chars.length)])
            .join("");
          setDisplayText(revealed + glitched.slice(0, 3));
          currentIndex++;
        } else {
          setDisplayText(text);
          clearInterval(interval);
        }
      }, 50);
    }, delay);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, delay]);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.95) {
        setIsGlitching(true);
        setTimeout(() => setIsGlitching(false), 100);
      }
    }, 100);

    return () => clearInterval(glitchInterval);
  }, []);

  return (
    <motion.span
      className={`relative inline-block ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: delay / 1000 }}
    >
      <span
        className={`${isGlitching ? "animate-glitch" : ""}`}
        style={{
          textShadow: isGlitching ? "-2px 0 #00d4ff, 2px 0 #ff00ff" : "none",
        }}
      >
        {displayText}
      </span>
      {isGlitching && (
        <>
          <span
            className="absolute top-0 left-0 text-neon-blue opacity-70"
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 35%, 0 35%)",
              transform: "translate(-2px, 0)",
            }}
          >
            {displayText}
          </span>
          <span
            className="absolute top-0 left-0 text-neon-pink opacity-70"
            style={{
              clipPath: "polygon(0 65%, 100% 65%, 100% 100%, 0 100%)",
              transform: "translate(2px, 0)",
            }}
          >
            {displayText}
          </span>
        </>
      )}
    </motion.span>
  );
};

export default GlitchText;
