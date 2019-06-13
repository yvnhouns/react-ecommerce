import React from "react";
import { ProductConsumer } from "../../context";

const CartTotals = () => {
  return (
    <div className="container">
      <div className="row">
        <ProductConsumer>
          {value => {
            const {
              cartSubTotal,
              carTax,
              carTotal,
              removeItem,
              clearCart,
              devise
            } = value;
            return (
              <div className="col text-title text-center my-4">
                <button
                  className="btn btn-outline-danger text-capilalize mb-4"
                  onClick={clearCart}
                >
                  Clear card
                </button>
                <h3>
                  SubTotal: {cartSubTotal} {devise}
                </h3>
                <h3>
                  SubTotal: {carTax} {devise}
                </h3>
                <h3>
                  SubTotal: {carTotal} {devise}
                </h3>
              </div>
            );
          }}
        </ProductConsumer>
      </div>
    </div>
  );
};

export default CartTotals;
