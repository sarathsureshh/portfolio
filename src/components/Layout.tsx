import { FC } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return <div className="relative w-full">{children}</div>;
};

export default Layout;
