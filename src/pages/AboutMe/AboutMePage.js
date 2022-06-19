import React from 'react';
import './AboutMePage.scss';

import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AboutMePage = () => {
  return (
    <section className="aboutme-page">
        <section className='profile-col'>
            <h1>About Me</h1>

            <p><b>Critical Thinker:</b> I always do my best to analyze complex logic and data. I create algorithms to solve complex problems.</p>
            <p><b>Good Programmer:</b> I always do my best to make my code clean and readable. I always group my codes according to their usage and leave comments that are easy to understand.</p>
            <p><b>Learning Enthusiast:</b> I'm always seeking to improve my skills and willing to learn new things.</p>
            <p><b>Good Teacher:</b> I try my best to understand to be able to teach my learnings to other people.</p>
        </section>

        <section className="skills-col">
            <div className="cubespinner">
                <div className="face1">
                    <FontAwesomeIcon icon={faAngular} color="#DD0031" />
                </div>
                <div className="face2">
                    <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                </div>
                <div className="face3">
                    <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                </div>
                <div className="face4">
                    <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                </div>
                <div className="face5">
                    <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                </div>
                <div className="face6">
                    <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                </div>
            </div>

            <div className="allskills">
                <FontAwesomeIcon icon={faAngular} color="#DD0031" />
                <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
        </section>
    </section>
  )
}

export default AboutMePage;

