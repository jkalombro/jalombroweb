import React from 'react';
import './AboutMePage.scss';
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faFontAwesome, faGitlab, faReact, faSass, faGithub, faGulp, faNodeJs, faNpm, faYarn, faSwift, faConfluence, faAtlassian } from '@fortawesome/free-brands-svg-icons';
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

            <br />
            <p><i>Note: The list of skills displayed here is limited because fontawesome doesn't 
                have logo for all of them. To view the complete list of my tech stack, please refer to my 
                <a href="https://www.docdroid.net/xwJhDh4/alombro-resume-pdf" target="_blank" rel="noreferrer">RESUME/CV</a></i></p>
        </section>

        <section className="skills-col">
            <div className="cube-wrapper">
                <div className="cubespinner">
                    <div className="face1">
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                    </div>
                    <div className="face3">
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon icon={faSass} color="#CC6699" />
                    </div>
                    <div className="face5">
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                    </div>
                    <div className="face6">
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                    </div>
                </div>
            </div>
            
            <div className="allskills-wrapper">
                <div className="skills-with-logo animated-displayin">
                    <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                    <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                    <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                    <FontAwesomeIcon icon={faSass} color="#CC6699" />
                    <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                    <FontAwesomeIcon icon={faAngular} color="#DD0031" />
                    <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                    <FontAwesomeIcon icon={faGithub} color="#f0f6fc" />
                    <FontAwesomeIcon icon={faNodeJs} color="#68a063" />
                    <FontAwesomeIcon icon={faNpm} color="#cc3534" />
                    <FontAwesomeIcon icon={faYarn} color="#2a87b2" />
                    <FontAwesomeIcon icon={faSwift} color="#f05138" />
                    <FontAwesomeIcon icon={faConfluence} color="#247df2" />
                    <FontAwesomeIcon icon={faGitlab} color="#d74027" />
                    <FontAwesomeIcon icon={faAtlassian} color="#247df2" />
                    <FontAwesomeIcon icon={faGulp} color="#DB4446" />
                    <FontAwesomeIcon icon={faFontAwesome} color="#247df2" />
                </div>
                
            </div>
        </section>
    </section>
  )
}

export default AboutMePage;

