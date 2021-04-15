import React, { useState } from 'react';
import "./Projects.css";
import slidersImg from "../../res/slidersImg.jpg";
import brawlLiveImg from "../../res/brawlLive.png";
import github from "../../res/github.png";

class Projectsc extends React.Component{
    constructor(props){
        super();

        this.state = {

        }
    }

    render(){
        return(
            <div>
            <h1 className="header"><i>Projects</i></h1>
            <div className="projectDump">
                <div className="project">
                    <a href="https://github.com/Rowan-Nag/Sliders"><img src={slidersImg}></img>
                    <h2 className="projectTitle">Sliders</h2></a>
                    Sliders was a small online two player strategy game I developed using react and firebase. Originally, it was planned to be an AI project where users played 
                    against a genetic algorithm, constantly improving through playing against both itself and players. It also had complicated game logic that originally proved 
                    to be a little bit of a challenge, although it ended up quite simple in the end. In the future, I want to improve the online functionalities and turn it into 
                    what it was originally meant to be.
                </div>
                
                <div className="project">
                    <a href="https://github.com/Rowan-Nag/Brawl-Live"><img src={brawlLiveImg}></img>
                    <h2 className="projectTitle">Brawl Live</h2></a>
                    Brawl Live was a game I worked in with a friend of mine, and was one of my first large projects - I built this before I started learning
                    react, so the only framework I used was firebase. With firebase, we were able to give the game live combat functionalities inspired by 
                    MOBAs. I learned a lot of interesting mechanics and it was the first time I really exercised problem solving strategies. It also started
                    my research into firebase, which I ended up using for most of my other projects as well.
                </div>
                <div className="project">
                    <img src={github}></img>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus nisi malesuada massa venenatis dignissim. Maecenas semper ac enim eget suscipit. Phasellus malesuada mollis enim, vitae malesuada dolor egestas lobortis. Integer velit magna, dapibus ac semper eget, ullamcorper et justo. Proin quis ullamcorper eros, rhoncus faucibus odio.
                </div>
                

            </div>
                


            </div>

            
        )
    }
}
export default Projectsc;