import React, { useState } from 'react';
import "./About.css";
import puffin from "../../res/puffin.jpg"

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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ornare est sed elit fermentum auctor id in est. Fusce in ullamcorper odio. Duis porta pellentesque nibh, ac ultricies elit efficitur ac. Aenean sed diam enim. Duis ac porttitor nunc. Nullam pretium ipsum quis mauris feugiat ultrices. 
           <br/>
           <br/>
           <div className="quickInfo">
               <div className="sideInfo">My Name is Rowan</div>
               <img src={puffin} className="meImg"></img>
               
               </div>
           
           
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ornare est sed elit fermentum auctor id in est. Fusce in ullamcorper odio. Duis porta pellentesque nibh, ac ultricies elit efficitur ac. Aenean sed diam enim. Duis ac porttitor nunc. Nullam pretium ipsum quis mauris feugiat ultrices. Nulla eget tempor augue, quis eleifend lorem Vivamus imperdiet lectus non mi accumsan rhoncus. Proin scelerisque nunc nec risus porttitor, ac elementum enim pellentesque. Donec aliquet metus sit amet sagittis interdum. Ut dapibus commodo neque eu feugiat. In non volutpat ex, eu posuere mi. Curabitur et justo eget turpis luctus interdum a quis augue. Cras euismod, ligula volutpat aliquet interdum, purus erat lacinia quam, id dignissim dui felis eu neque.</div>
            <br></br>
            <br></br>
            </div>
        )
    }
}
export default Aboutc;