import React from "react";
import { Layout } from "../../components";
import { MainBody } from "./main.body";
import { MainBottom } from "./main.footer";
import { MainIntro } from "./main.intro";

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
