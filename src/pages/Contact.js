import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Contact extends Component {
  render() {
    if(this.props.currentactivemenu != this.props.location.pathname) {
        this.props.handleChangeRoute(this.props.location.pathname);
    }

    return (
      <div className="contact-page-container">
        <div>
          <br /><br /><br /><br />
          <h1>CONTACT page is still under construction :)</h1>
        </div>
      </div>
    )
  }
}

export default withRouter(Contact);
