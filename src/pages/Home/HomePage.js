import React, { useEffect, useState } from "react";
import meCartoonIMG from "../../images/me_cartoon.png";
import "./HomePage.scss";
import { faLinkedin, faGithub, faStackOverflow } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HomePage = () => {
    const [mediaclass, setMediaclass] = useState("smedia animated-displayin");

    useEffect(() => {
        setTimeout(() => setMediaclass("smedia"), 2000);
    }, []);

    const handleClick = link => {
        window.open(link, "_blank");
    };

    return (
        <section className="home-page" data-testid="homepage">
            <div className="personal-div">
                <h1>Hi, I'm Jerich!</h1>
                <p>I'm a Software Developer that specializes in Front-end.</p>
                <p>I love using ReactJS.</p>

                <div className={mediaclass}>
                    <div onClick={() => handleClick("https://github.com/jkalombro")}>
                        <FontAwesomeIcon icon={faGithub} color="#FFF" title="smedia" />
                    </div>
                    <div onClick={() => handleClick("https://www.linkedin.com/in/jerich-alombro-47a4a9124/")}>
                        <FontAwesomeIcon icon={faLinkedin} color="#FFF" title="smedia" />
                    </div>
                    <div onClick={() => handleClick("https://stackoverflow.com/users/5906950/jkalombro?tab=profile")}>
                        <FontAwesomeIcon icon={faStackOverflow} color="#FFF" title="smedia" />
                    </div>
                </div>

                <img className="cartoon-img" src={meCartoonIMG} alt="my-cartoon-self" />
            </div>
        </section>
    );
};

export default HomePage;
