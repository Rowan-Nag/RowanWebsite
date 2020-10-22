import React from 'react';
import "./Blog.css";

class Galleryc extends React.Component{
    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        return(
        <div>
            <h1 className="header"><i>Blog</i></h1>
            <div className="blogPost">
                <div className="postHeader">
                <h2>About The Puffin</h2>
                <span className="date">10/15/2020</span>
                </div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus nisi malesuada massa venenatis dignissim. Maecenas semper ac enim eget suscipit. Phasellus malesuada mollis enim, vitae malesuada dolor egestas lobortis. Integer velit magna, dapibus ac semper eget, ullamcorper et justo. Proin quis ullamcorper eros, rhoncus faucibus odio.
            </div>
            <div className="blogPost">
                <div className="postHeader">
                <h2>About The Puffin</h2>
                <span className="date">10/15/2020</span>
                </div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus nisi malesuada massa venenatis dignissim. Maecenas semper ac enim eget suscipit. Phasellus malesuada mollis enim, vitae malesuada dolor egestas lobortis. Integer velit magna, dapibus ac semper eget, ullamcorper et justo. Proin quis ullamcorper eros, rhoncus faucibus odio.
            </div>
        </div>
        )
    }
}


export default Galleryc;