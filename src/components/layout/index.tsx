import React from "react";
import { AppFooter, AppHeader } from "..";

export const Layout = ({ children }: { children: React.JSX.Element }) => {
  return (
    <div className="overflow-x-hidden">
      <AppHeader />
      {children}
      <AppFooter />
    </div>
  );
};
