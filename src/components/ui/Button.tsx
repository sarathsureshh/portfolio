import Link from "next/link";
import React, { FC } from "react";

interface ButtonProps {
  text: string;
  icon?: React.ReactNode;
  href: string;
}

const Button: FC<ButtonProps> = ({ text, icon, href }) => {
  return (
    <Link
      href={href}
      target="_blank"
      className="flex items-center gap-1 px-4 py-2 font-semibold border-2 rounded-md bg-dark text-light hover:bg-light hover:text-dark border-dark dark:border-light dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light md:px-3 md:py-1.5 md:text-sm"
    >
      {text}
      {icon}
    </Link>
  );
};

export const ButtonOutline: FC<ButtonProps> = ({ text, icon, href }) => {
  return (
    <Link
      href={href}
      target="_blank"
      className="flex items-center gap-1 px-3 py-1.5 text-sm font-semibold border rounded-full bg-transparent text-dark border-dark dark:border-light dark:text-light border-solid"
    >
      {text}
      {icon}
    </Link>
  );
};

export default Button;
