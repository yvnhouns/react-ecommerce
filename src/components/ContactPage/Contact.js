import React, { Component } from "react";
import Title from "../Title";

class Contact extends Component {
  render() {
    return (
      <section className="py-5">
        <div className="row">
          <div className="col-10 mx-auto cold-md my-3">
            <Title title="Contact us" />
            <form className="mt-5">
              <div className="form-group">
                {/* Firstname */}
                <input
                  type="text"
                  name="firstName"
                  className="form-control"
                  placeholder="John Smoth"
                />
              </div>
              <div className="form-group">
                {/* email */}
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="john.smoth@google.com"
                />
              </div>
              <div className="form-group">
                {/* subjet */}
                <input
                  type="text"
                  name="subjet"
                  className="form-control"
                  placeholder="!!! Impotant"
                />
              </div>
              <div className="form-group">
                {/* message */}

                <textarea
                  name="subjet"
                  className="form-control"
                  placeholder="hello there buddy"
                  rows="10"
                />
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
