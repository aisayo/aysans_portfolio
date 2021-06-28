import * as React from "react";
import Layout from "../components/layout";
import Home from "../components/home";
// import About from './about'
// import Projects from './projects'
// import Section from '../components/section'

import "../assets/tailwind.css";
const IndexPage = () => {
  return (
    <Layout>
      <Home />
    </Layout>
  );
};

export default IndexPage;
