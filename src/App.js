import React from 'react';
import logo from './logo.svg';
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
var currentClass = "Home";
function switchClass(nameClass){
  let body = document.getElementsByTagName("body")[0];
  let appHeader = document.getElementsByClassName("Navigation")[0];
  if(body.classList.contains(currentClass)){
    body.classList.remove(currentClass);
  }if(appHeader.classList.contains(currentClass)){
    appHeader.classList.remove(currentClass);
  }
  body.classList.add(nameClass);
  appHeader.classList.add(nameClass);
  currentClass = nameClass

}


export default function App() {
  return (
    <Router>
      <div>
        <nav >
          <div className={"Navigation"}>
            {/* <div className={"Switch"}>
                
            </div> */}
            <ul className={"NavElements"}>
              <li className={"homeLink"} onClick={()=>{
                switchClass("Home");
              }}>
                
                <Link to="/" style={{ textDecoration: 'none' }} ><div className="Switch">Home</div></Link>
              </li>
              <li className={"aboutLink"} onClick={()=>{
                switchClass("About");
              }}>
                <Link to="/blog" style={{ textDecoration: 'none' }}><div className="Switch">Blog</div></Link>
              </li>
              {/* <li className={"connectionsLink"} onClick={()=>{
                switchClass("Connections");
              }}>
                <Link to="/gallery" style={{ textDecoration: 'none'}}><div className="Switch">Gallery</div></Link>
              </li> */}
              <li className={"projectsLink"} onClick={()=>{
                switchClass("Projects");
              }}>
                <Link to="/projects" style={{ textDecoration: 'none' }}><div className="Switch">Projects</div></Link>
              </li>
            </ul>
          </div>
          <div className="links">
              <img src={github} className = "github"></img>
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

