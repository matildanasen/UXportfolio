import React from "react";
import "../app/App.css";
import {
  HashRouter,
  Route,
  Switch,
  Redirect,
  Link,
  NavLink,
} from "react-router-dom";
import "./App.css";
import Navigation from "../navigation/navigation";
import Home from "../home/home";
import Projects from "../projects/projects";
import About from "../about/about";
import Contact from "../contact/contact";

function App() {
  return (
    <HashRouter>
      <div className="app">
        <Navigation />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route from="*" to="/" component={Home} />
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
