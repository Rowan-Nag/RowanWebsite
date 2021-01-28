import React, { useState } from 'react';
import "./About.css";
import puffin from "../../res/puffin.jpg";
import cat from "../../res/cat.jpg";
class Aboutc extends React.Component{
    constructor(props){
        super();

        this.state = {

        }
    }

    render(){
        return(
            <div>
                <h1 className="header"><i>About Me</i></h1>
                <div className="mainSection">
                    I'm really just a teenager who enjoys learning new things! Most of my time is taken up by schoolwork or playing video games with my friends, and some of it is spent programming!
                    <br/>
                    I'm also a all-round programmer who doesn't really know what they want to do.
                    I'm interested in a range of topics ranging between web development, machine learning, and tool design for the video games I play!
                    <br/>
                    
                    <br/>
                    <br/>
                    <div className="quickInfo">
                        <div className="sideInfo">
                            <i>Favorite Language?</i><br/>
                            Python
                            <br/>
                            <br/>
                            <i>Favorite Food?</i><br/>
                            Sushi
                            <br/>
                            <br/>
                            <i>Favorite Pokemon?</i><br/>
                            Gible
                            
                        </div>
                        <div className="center">
                            <img src={cat} className="meImg"></img>
                            
                            This is my cat!
                        </div>

                    </div>
                    Feel free to take a quick look around this site, there's not much but I'm hoping to fill it with both my projects and findings in the future!
                </div>
            </div>
        )
    }
}
export default Aboutc;