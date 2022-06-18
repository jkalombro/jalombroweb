import React from 'react';
import { withRouter } from 'react-router-dom';
import meCartoonIMG from '../../images/me_cartoon.png';
import './Home.css';

//components
import SocialMedia from '../../components/SocialMedia';

const Home = ({ currentactivemenu, location, handleChangeRoute }) => {
  if(currentactivemenu !== location.pathname) {
    handleChangeRoute(location.pathname);
  }

  return (
    <section className="home-page">
        <div className="personal-div">
          <h1>Hi, I'm Jerich!</h1>
          <p>I'm a Software Developer that specializes in Front-end.</p>
          <p>I love using ReactJS.</p>
          <SocialMedia />
          <img className="cartoon-img" src={meCartoonIMG} alt="my-cartoon-self" />
        </div>
    </section>
  );
}

export default withRouter(Home);
