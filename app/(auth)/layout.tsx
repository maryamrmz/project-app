import { GlassPane } from "@/components";
import "@/styles/globals.css";
import { FC, ReactNode } from "react";

interface AuthRootLayoutProps {
  children: ReactNode;
}

const AuthRootLayout: FC<AuthRootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <head />
      <body className="h-screen w-screen rainbow-mesh p-6">
        <GlassPane className="w-full h-full flex items-center justify-center">
          {children}
        </GlassPane>
      </body>
    </html>
  );
};

export default AuthRootLayout;
