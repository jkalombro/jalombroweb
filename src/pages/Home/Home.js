import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import meCartoonIMG from '../../images/me_cartoon.png';
import './Home.css';

//components
import SocialMedia from '../../components/SocialMedia';

class Home extends Component {
  render() {
    if(this.props.currentactivemenu !== this.props.location.pathname) {
      this.props.handleChangeRoute(this.props.location.pathname);
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
    )
  }
}

export default withRouter(Home);
