import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import {
  MoonIcon,
  SunIcon,
  SunIconMobile,
} from "./assets/Icons";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { useDarkMode } from "usehooks-ts";
import checkTheme from "@/util/themeCheck";
import useTheme from "./hooks/useTheme";

interface NavbarProps {}

interface NavigationLinkProps {
  text: string;
  href: string;
  className?: string;
  isOpenMenu?: boolean;
  setIsOpenMenu?: Dispatch<SetStateAction<boolean>>;
}

const NavigationLink: FC<NavigationLinkProps> = ({
  text,
  href,
  className = "",
  isOpenMenu = false,
  setIsOpenMenu,
}) => {
  const router = useRouter();

  return (
    <>
      <Link
        href={href}
        onClick={() =>
          isOpenMenu && setIsOpenMenu && setIsOpenMenu(!isOpenMenu)
        }
        className={`${
          router.asPath === href && !isOpenMenu
            ? "text-dark dark:text-light"
            : ""
        }

        ${
          router.asPath === href && isOpenMenu
            ? "text-light dark:text-dark"
            : ""
        }

        
         cursor-pointer ${className}`}
      >
        {text}
      </Link>
    </>
  );
};

const Navbar: FC<NavbarProps> = ({}) => {
  const theme = useTheme();
  const { toggle } = useDarkMode();
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

  const handleMenuClick = () => setIsOpenMenu(!isOpenMenu);

  const hadleTheme = () => {
    toggle();
    checkTheme();
  };

  return (
    <>
      <motion.header
        className="absolute z-10 flex items-center justify-between w-full gap-8 py-6 text-lg font-semibold text-dark/70 dark:text-light/70 "
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
      >
        <button
          className={`flex-col items-center justify-center hidden lg:flex
          ${isOpenMenu ? "z-50" : ""}`}
          onClick={handleMenuClick}
        >
          <span
            className={`w-6 h-0.5 block rounded-sm transition-all duration-500 ease-out bg-dark dark:bg-light ${
              isOpenMenu
                ? "rotate-45 translate-y-1.5 bg-light dark:bg-dark"
                : "-translate-y-0.5"
            }`}
          />
          <span
            className={`w-6 h-0.5 block rounded-sm transition-all duration-500 ease-out bg-dark dark:bg-light my-1 ${
              isOpenMenu ? "opacity-0 bg-light dark:bg-dark" : "opacity-100"
            }`}
          />
          <span
            className={`w-6 h-0.5 block rounded-sm transition-all duration-500 ease-out bg-dark dark:bg-light ${
              isOpenMenu
                ? "-rotate-45 -translate-y-1.5 bg-light dark:bg-dark"
                : "translate-y-0.5"
            }`}
          />
        </button>

        {/* Desktop menu */}
        <nav className="flex items-center justify-end w-full gap-8 lg:hidden">
          <NavigationLink text="Home" href="/" />
          <NavigationLink text="About" href="/about" />
          <NavigationLink text="Contact" href="/contact" />

          <button
            className={`flex items-center justify-center p-1 rounded-full
        ${theme === "dark" ? "bg-light text-dark" : "bg-dark text-light"}`}
            onClick={hadleTheme}
          >
            {theme === "dark" ? (
              <MoonIcon className="fill-dark" />
            ) : (
              <SunIcon className="fill-dark" />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isOpenMenu ? (
          <motion.nav
            className="fixed top-0 left-0 z-30 w-full h-full bg-dark/90 backdrop-blur-lg text-light/75 dark:bg-light/75 dark:text-dark/75"
            initial={{ scale: 0.2 }}
            animate={{ scale: 1 }}
          >
            <div className="fixed flex flex-col items-center justify-end gap-8 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 ">
              <NavigationLink
                text="Home"
                href="/"
                isOpenMenu
                setIsOpenMenu={setIsOpenMenu}
              />
              <NavigationLink
                text="About"
                href="/about"
                isOpenMenu
                setIsOpenMenu={setIsOpenMenu}
              />
              <NavigationLink
                text="Projects"
                href="/projects"
                isOpenMenu
                setIsOpenMenu={setIsOpenMenu}
              />
              <NavigationLink
                text="Contact"
                href="/contact"
                isOpenMenu
                setIsOpenMenu={setIsOpenMenu}
              />

              <button
                className={`flex items-center justify-center px-2 rounded-full
        ${theme === "dark" ? "bg-light text-dark" : "bg-dark text-light"}`}
                onClick={hadleTheme}
              >
                {theme === "dark" ? (
                  <div className="flex gap-2 p-1">
                    <span>Light</span>
                    <MoonIcon className="fill-dark" />
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-1 pl-2">
                    <span>Dark</span>
                    <SunIconMobile className="fill-dark" />
                  </div>
                )}
              </button>
            </div>
          </motion.nav>
        ) : null}
      </motion.header>
    </>
  );
};

export default Navbar;
