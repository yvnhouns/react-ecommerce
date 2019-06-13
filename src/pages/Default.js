import React, { Component } from "react";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import defaultBcg from "../images/defaultBcg.jpeg";

class Default extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Hero title="404" img={defaultBcg} max="true">
        <h2 className="text-uppercase"> Page not found</h2>
        <Link to="/" class="main-link" style={{ marginTop: "2rem" }}>
          Return to Home
        </Link>
      </Hero>
    );
  }
}

Default.propTypes = {};
export default Default;
