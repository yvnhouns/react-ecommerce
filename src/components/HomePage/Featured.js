import React, { Component } from "react";
import Title from "../Title";
import Product from "../Product";
import { ProductConsumer } from "../../context";
import { Link } from "react-router-dom";

class Featured extends Component {
  render() {
    return (
      <section className="py-5">
        <div className="container">
          {/* Title */}

          <Title title="Featured Products" center="true" />
          {/* Featured products */}
          <div className="row my-5">
            <ProductConsumer>
              {value => {
                const { featuredProducts } = value;
                return featuredProducts.map(product => (
                  <Product product={product} key={product.id} />
                ));
              }}
            </ProductConsumer>
          
            
          </div>
          
          <div className="row mt-5">
              <div className="col text-center">
                <Link to="/products" className="main-link">
                  Our Products
                </Link>
              </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Featured;
