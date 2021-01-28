import React from 'react';
import './App.css';
import Blog from "./hoc/Blog/Blog"
import About from "./hoc/About/About";
import Projects from "./hoc/Projects/Projects"
import Gallery from "./hoc/Gallery/Gallery";

import github from "../src/res/github.png"
import discord from "../src/res/discord.png"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default function App() {
  return (
    <Router>
      <div>
        <nav >
          <div className={"Navigation"}>
            {/* <div className={"Switch"}>
                
            </div> */}
            <ul className={"NavElements"}>
              <li className={"homeLink"}>
                
                <Link to="/" style={{ textDecoration: 'none' }} ><div className="Switch">Home</div></Link>
              </li>
              <li className={"aboutLink"}>
                <Link to="/blog" style={{ textDecoration: 'none' }}><div className="Switch">Blog</div></Link>
              </li>
              {/* <li className={"connectionsLink"} onClick={()=>{
                switchClass("Connections");
              }}>
                <Link to="/gallery" style={{ textDecoration: 'none'}}><div className="Switch">Gallery</div></Link>
              </li> */}
              <li className={"projectsLink"}>
                <Link to="/projects" style={{ textDecoration: 'none' }}><div className="Switch">Projects</div></Link>
              </li>
            </ul>
          </div>
          <div className="links">
              
              <a href="https://github.com/Rowan-Nag">
                <img src={github} className = "github"></img>
              </a>
              <div className="discord">
                <img src={discord} className = "discord"></img>
                <span className="tooltipText">ProtoChicken#1370</span>
              </div>
            </div>
        </nav>

        <Switch>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/gallery">
            <Gallery />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/">
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

