import React, { Component } from 'react'

//images
import githubIMG from '../images/github.png';
import linkedinIMG from '../images/linkedin.png';

class SocialMedia extends Component {

    handleClick(link) {
        window.open(link, "_blank");
    }

    render() {
        return (
        <div className="smedia" >
            <img src={githubIMG} onClick={this.handleClick.bind(null, "https://github.com/jkninja238")} alt="GitHub Logo" />
            <img src={linkedinIMG} onClick={this.handleClick.bind(null, "https://www.linkedin.com/in/jerich-alombro-47a4a9124/")} alt="LinkedIn Logo" />
        </div>
        )
    }
}

export default SocialMedia;
