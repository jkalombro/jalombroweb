import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Contact.css';

class Contact extends Component {
  render() {
    if(this.props.currentactivemenu !== this.props.location.pathname) {
        this.props.handleChangeRoute(this.props.location.pathname);
    }

    return (
      <section className="contact-page">
        <div>
          <br /><br /><br /><br />
          <h1>CONTACT page is still under construction :)</h1>
        </div>
      </section>
    )
  }
}

export default withRouter(Contact);
