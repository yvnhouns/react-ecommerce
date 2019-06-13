import React, { Component } from "react";
import Contact from "../components/ContactPage/Contact";
import Hero from "../components/Hero";
import contactBcg from "../images/contactBcg.jpeg";

class ContactPage extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Hero img={contactBcg} />
        <Contact />
      </>
    );
  }
}

ContactPage.propTypes = {};

export default ContactPage;
