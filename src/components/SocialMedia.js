import React from 'react';

//images
import githubIMG from '../images/github.png';
import linkedinIMG from '../images/linkedin.png';

const SocialMedia = () => {
    const handleClick = (link) => {
        window.open(link, "_blank");
    }

    return (
        <div className="smedia" >
            <img src={githubIMG} onClick={() => handleClick("https://github.com/jkalombro")} alt="GitHub Logo" />
            <img src={linkedinIMG} onClick={() => handleClick("https://www.linkedin.com/in/jerich-alombro-47a4a9124/")} alt="LinkedIn Logo" />
        </div>
    );
}

export default SocialMedia;
