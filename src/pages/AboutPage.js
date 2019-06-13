import React, { Component } from "react";
import Hero from "../components/Hero";
import aboutBcg from "../images/aboutBcg.jpeg";

import Info from "../components/AboutPage/Info";

class AboutPage extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Hero img={aboutBcg} />
        <Info />
      </>
    );
  }
}

export default AboutPage;
