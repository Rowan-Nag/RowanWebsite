import React, { useState } from 'react';
import "./Projects.css";
import puffinImg from "../../res/puffin.jpg";
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
                    <a href="https://github.com/Rowan-Nag"><img src={github}></img></a>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus nisi malesuada massa venenatis dignissim. Maecenas semper ac enim eget suscipit. Phasellus malesuada mollis enim, vitae malesuada dolor egestas lobortis. Integer velit magna, dapibus ac semper eget, ullamcorper et justo. Proin quis ullamcorper eros, rhoncus faucibus odio.
                </div>
                
                <div className="project">
                    <img src={github}></img>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus nisi malesuada massa venenatis dignissim. Maecenas semper ac enim eget suscipit. Phasellus malesuada mollis enim, vitae malesuada dolor egestas lobortis. Integer velit magna, dapibus ac semper eget, ullamcorper et justo. Proin quis ullamcorper eros, rhoncus faucibus odio.
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