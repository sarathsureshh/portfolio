import { FC } from "react";
import { MyCircularText } from "./Icons";
import { motion, useAnimate } from "framer-motion";
import Link from "next/link";

interface HireMeProps {}

const HireMe: FC<HireMeProps> = ({}) => {
  const [scope, animate] = useAnimate();

  return (
    <motion.div
      ref={scope}
      className="fixed flex items-center justify-center overflow-hidden bottom-4 left-4"
      initial={{ bottom: 950 }}
      animate={{ bottom: 0 }}
      transition={{
        type: "spring",
        duration: 6,
        bounce: 0.7,
      }}
    >
      <div className="relative flex items-center justify-center h-auto w-36 sm:w-28">
        <MyCircularText className="fill-dark dark:fill-light animate-spin-slow" />
        <Link
          href="mailto:sarathsuresh9360@gmail.com"
          className="absolute flex items-center justify-center w-20 h-20 font-semibold -translate-x-1/2 -translate-y-1/2 border border-solid rounded-full shadow-xl sm:w-16 sm:h-16 sm:text-sm bg-dark text-light border-dark top-1/2 left-1/2 hover:bg-light hover:text-dark dark:bg-fuchsia-100 dark:text-dark dark:border-light hover:dark:bg-dark hover:dark:text-light"
        >
          Hire Me
        </Link>
      </div>
    </motion.div>
  );
};

export default HireMe;
