import React from "react";
import Layout from "../components/layout";
import Footer from "../components/footer";
import Sections from "../components/sections";

export const Groups = () => {
  return (
      <Layout>
          <Sections
            title="Study Groups"
            description="Get the opportunity to create your own study group and others
                can join as well!"
            btnTitle="Create a Study Group"
          />
          <Sections
            description="Discover study groups and join if you would like."
            btnTitle="Find Study Groups"
          />
          <Footer />
      </Layout>
  );
};
