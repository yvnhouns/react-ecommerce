import React, { Component } from "react";
import Title from "../Title";
import aboutBcg from "../../images/aboutBcg.jpeg";
class Info extends Component {
  render() {
    return (
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-6 my-3">
              <img
                src={aboutBcg}
                alt="about us"
                className="img-fluid img-thumbnail"
                style={{ background: "var(--darkGrey)" }}
              />
            </div>
            <div className="col-10 mx-auto col-md-6 my-3">
              <Title title="about us" />
              <p className="text-lead text-muted my-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci, distinctio provident optio vero consectetur odio
                reiciendis non perspiciatis rem voluptas.
              </p>
              <p className="text-lead text-muted my-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci, distinctio provident optio vero consectetur odio
                reiciendis non perspiciatis rem voluptas.
              </p>
              <button
                className="main-link"
                type="button"
                style={{ marginTop: "2rem" }}
              >
                more info
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Info;
