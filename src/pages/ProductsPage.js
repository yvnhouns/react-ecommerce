import React, { Component } from "react";
import Products from "../components/ProductsPage/Products";
import Hero from "../components/Hero";
import productsBcg from "../images/productsBcg.jpeg";

class ProductsPage extends Component {
  render() {
    return (
      <>
        <Hero img={productsBcg} />
        <Products />
      </>
    );
  }
}

export default ProductsPage;
