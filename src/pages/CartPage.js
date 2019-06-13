import React, { Component } from "react";
import Cart from "../components/CartPage";
import Hero from "../components/Hero";
import storeBcg from "../images/storeBcg.jpeg";

class CartPage extends Component {
  render() {
    return (
      <>
        <Hero img={storeBcg} />
        <Cart />
      </>
    );
  }
}

CartPage.propTypes = {};

export default CartPage;
