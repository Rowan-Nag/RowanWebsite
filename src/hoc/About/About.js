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
                    Hello!
                    <br/>
                    My name is Rowan Nag, and I'm a teenager from silicon valley.
                    <br/>
                    I currently go to high school, and am interested in many different topics, both programming and non-programming related.
                    <br/>
                    This includes environmental science, physics, web development. 
                    <br/>
                    I also want to get involved with machine learning and astrophotography.
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


                    
                </div>
            </div>
        )
    }
}
export default Aboutc;