import React from "react";
import { AppFooter, AppHeader } from "..";

export const Layout = ({ children }: { children: React.JSX.Element }) => {
  return (
    <>
      <AppHeader />
      {children}
      <AppFooter />
    </>
  );
};
