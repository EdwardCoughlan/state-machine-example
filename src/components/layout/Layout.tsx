import { ReactNode } from "react";
import { Header } from "./Header";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="w-screen h-screen">
      <Header />
      <div className="container mx-auto px-4 py-6 ">{children}</div>
    </div>
  );
};

export default Layout;
