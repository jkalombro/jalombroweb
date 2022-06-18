import React from "react";
import { withRouter } from "react-router-dom";
import "./Contact.css";

const Contact = ({ currentactivemenu, location, handleChangeRoute }) => {
  if (currentactivemenu !== location.pathname) {
    handleChangeRoute(location.pathname);
  }

  return (
    <section className="contact-page">
      <br />
      <br />
      <br />
      <br />
      <h1>CONTACT page is still under construction :)</h1>
    </section>
  );
};

export default withRouter(Contact);
