import React from 'react';
import meCartoonIMG from '../../images/me_cartoon.png';
import './HomePage.scss';

//components
import SocialMedia from '../../components/SocialMedia';

const HomePage = () => {

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

export default HomePage;
