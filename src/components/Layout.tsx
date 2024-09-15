import { FC } from "react";
import { Analytics } from "@vercel/analytics/react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="relative w-full">
      {children} 
      <Analytics />
    </div>
  );
};

export default Layout;
