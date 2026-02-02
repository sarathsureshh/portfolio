import { Dispatch, FC, SetStateAction, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {}

interface NavigationLinkProps {
  text: string;
  href: string;
  index: number;
  isOpenMenu?: boolean;
  setIsOpenMenu?: Dispatch<SetStateAction<boolean>>;
}

const NavigationLink: FC<NavigationLinkProps> = ({
  text,
  href,
  index,
  isOpenMenu = false,
  setIsOpenMenu,
}) => {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <Link
        href={href}
        onClick={() => isOpenMenu && setIsOpenMenu && setIsOpenMenu(false)}
        className={`relative group font-mono text-sm uppercase tracking-wider transition-all duration-300
          ${isActive ? "text-neon-green" : "text-gray-400 hover:text-neon-green"}`}
      >
        <span className="flex items-center gap-2">
          <span
            className={`text-neon-blue ${isActive ? "opacity-100" : "opacity-50 group-hover:opacity-100"}`}
          >
            {String(index + 1).padStart(2, "0")}.
          </span>
          <span>{text}</span>
        </span>

        <motion.span
          className="absolute -bottom-1 left-0 h-px bg-gradient-to-r from-neon-green to-neon-blue"
          initial={{ width: isActive ? "100%" : "0%" }}
          animate={{ width: isActive ? "100%" : "0%" }}
          whileHover={{ width: "100%" }}
          transition={{ duration: 0.3 }}
        />

        {isActive && (
          <motion.span
            className="absolute -left-4 top-1/2 -translate-y-1/2 w-2 h-2 bg-neon-green rounded-full"
            layoutId="activeIndicator"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300 }}
            style={{ boxShadow: "0 0 10px #00ff88, 0 0 20px #00ff88" }}
          />
        )}
      </Link>
    </motion.div>
  );
};

const Navbar: FC<NavbarProps> = () => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

  const navItems = [
    { text: "Home", href: "/" },
    { text: "About", href: "/about" },
    { text: "Experience", href: "/experience" },
    { text: "Projects", href: "/projects" },
    { text: "Contact", href: "/contact" },
  ];

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 px-32 lg:px-16 md:px-8 sm:px-4"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="relative py-4">
        <div className="absolute inset-0 bg-cyber-dark/80 backdrop-blur-md border-b border-neon-green/10" />

        <nav className="relative flex items-center justify-between">
          <motion.div className="flex items-center gap-2" whileHover={{ scale: 1.02 }}>
            <Link href="/" className="flex items-center gap-2 group">
              <motion.div
                className="w-10 h-10 flex items-center justify-center border border-neon-green/50 bg-neon-green/5 font-mono font-bold text-neon-green"
                whileHover={{
                  borderColor: "#00ff88",
                  boxShadow: "0 0 20px rgba(0, 255, 136, 0.5)",
                }}
              >
                S
              </motion.div>
              <div className="hidden sm:hidden md:block">
                <span className="font-mono text-xs text-gray-500">{"// "}</span>
                <span className="font-mono text-xs text-neon-green">sarath.dev</span>
              </div>
            </Link>
          </motion.div>

          <div className="hidden lg:flex items-center">
            <button
              className="relative w-8 h-8 flex flex-col items-center justify-center z-50"
              onClick={() => setIsOpenMenu(!isOpenMenu)}
            >
              <motion.span
                className="absolute w-6 h-0.5 bg-neon-green rounded-full"
                animate={{
                  rotate: isOpenMenu ? 45 : 0,
                  y: isOpenMenu ? 0 : -4,
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="absolute w-6 h-0.5 bg-neon-green rounded-full"
                animate={{
                  opacity: isOpenMenu ? 0 : 1,
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="absolute w-6 h-0.5 bg-neon-green rounded-full"
                animate={{
                  rotate: isOpenMenu ? -45 : 0,
                  y: isOpenMenu ? 0 : 4,
                }}
                transition={{ duration: 0.3 }}
              />
            </button>
          </div>

          <div className="flex items-center gap-8 lg:hidden">
            {navItems.map((item, index) => (
              <NavigationLink key={item.href} text={item.text} href={item.href} index={index} />
            ))}

            <motion.a
              href="/resume.pdf"
              target="_blank"
              className="relative px-4 py-2 font-mono text-sm uppercase tracking-wider text-neon-green border border-neon-green/50 overflow-hidden group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.span
                className="absolute inset-0 bg-neon-green"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10 group-hover:text-cyber-dark transition-colors">
                Resume
              </span>
            </motion.a>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {isOpenMenu && (
          <motion.div
            className="fixed inset-0 z-40 lg:flex hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="absolute inset-0 bg-cyber-dark/95 backdrop-blur-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <div className="relative w-full h-full flex flex-col items-center justify-center gap-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <NavigationLink
                    text={item.text}
                    href={item.href}
                    index={index}
                    isOpenMenu
                    setIsOpenMenu={setIsOpenMenu}
                  />
                </motion.div>
              ))}

              <motion.a
                href="/resume.pdf"
                target="_blank"
                className="mt-4 px-6 py-3 font-mono text-sm uppercase tracking-wider text-neon-green border border-neon-green"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.4 }}
                whileHover={{
                  backgroundColor: "#00ff88",
                  color: "#0a0a0f",
                }}
              >
                Download Resume
              </motion.a>
            </div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-xs text-gray-600">
              <span className="text-neon-green">[</span>
              ESC
              <span className="text-neon-green">]</span> to close
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
