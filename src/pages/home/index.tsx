import React from "react";
import { Layout, MainBody, MainBottom, MainIntro } from "../../components";

export const Home = () => {
  return (
    <Layout>
      <>
        <MainIntro />
        <MainBody />
        <MainBottom />
      </>
    </Layout>
  );
};
