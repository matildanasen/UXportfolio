import React from "react";
import "./home.css";
import Footer from "../footer/footer";
import Contact from "../contact/contact";
import Projects from "../projects/projects";
import Firstpage from "../firstpage/firstpage";
import About from "../about/about";

import {
  Switch,
  Route,
  Router,
  HashRouter,
  Link,
  NavLink,
} from "react-router-dom";

function Home() {
  return (
    <div>
      <Firstpage />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
