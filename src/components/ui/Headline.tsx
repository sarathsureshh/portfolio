import { motion } from "framer-motion";
import { FC } from "react";

interface HeadlineProps {
  title: string;
  className?: string;
}

export const HeadlineAnimated: FC<HeadlineProps> = ({ title, className = "" }) => {
  return (
    <motion.h1
      className={`text-5xl lg:text-4xl sm:text-3xl font-bold uppercase text-center
      dark:text-transparent dark:bg-gradient-to-br dark:from-light dark:to-gray-700 dark:bg-clip-text ${className}`}
      initial={{ y: -50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      {title}
    </motion.h1>
  );
};

export const Headline: FC<HeadlineProps> = ({ title, className = "" }) => {
  return (
    <motion.h1
      className={`text-5xl lg:text-4xl sm:text-3xl font-bold uppercase text-center 
      dark:text-transparent dark:bg-gradient-to-br dark:from-light dark:to-gray-700 dark:bg-clip-text ${className}`}
    >
      {title}
    </motion.h1>
  );
};

export default Headline;
