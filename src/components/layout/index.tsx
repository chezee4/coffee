import { FC, ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col max-w-[1145px] m-auto overflow-hidden">
      {children}
    </div>
  );
};

export default Layout;
