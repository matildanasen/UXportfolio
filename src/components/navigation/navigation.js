import React from "react";
import "./navigation.css";
import { Route, HashRouter, Link, NavLink } from "react-router-dom";
import Home from "../home/home";
import About from "../about/about";
import Contact from "../contact/contact";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navigation = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const scrollToComponent = (id) => {
    window.location.hash = "#" + id;
  };

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      // document.getElementById("navbar").style.fontSize = "20px";
      document.getElementById("navbar").style.backgroundColor = "#fffcfa";
      document.getElementById("navbar").style.transition = "0.5s";
    } else {
      // document.getElementById("navbar").style.fontSize = "20 px";
      document.getElementById("navbar").style.backgroundColor = "transparent";
    }
  }

  return (
    <div id="navbar" className="navigation">
      <div className="name">
        <h2>MN</h2>
      </div>
      <div className="menu">
        <NavLink exact to="/" onClick={() => scrollToTop()}>
          Home
        </NavLink>

        <NavLink
          exact
          to={"#" + "projectId"}
          onClick={() => scrollToComponent("projectId")}
        >
          Portfolio
        </NavLink>

        <NavLink
          activeClassName="active"
          exact
          to={"#" + "aboutId"}
          onClick={() => scrollToComponent("aboutId")}
        >
          About
        </NavLink>

        <NavLink
          to={"#" + "contactId"}
          exact
          activeClassName="active"
          onClick={() => scrollToComponent("contactId")}
        >
          Contact
        </NavLink>
      </div>
    </div>
  );
};
export default Navigation;
