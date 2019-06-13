import React from "react";

import { ProductConsumer } from "../../context";
import CartItem from "./CartItem";

const CartList = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <ProductConsumer>
            {value => {
              const { cart, removeItem, increment, decrement } = value;
              if (cart.length === 0) {
                return (
                  <h1 className="text-title text-center my-4">
                    Your cart is currently empty
                  </h1>
                );
              }
              // eslint-disable-next-line no-unreachable
              return (
                <>
                  {cart.map(item => (
                    <CartItem
                      key={item.id}
                      cartItem={item}
                      removeItem={removeItem}
                      increment={increment}
                      decrement={decrement}
                    />
                  ))}
                </>
              );
            }}
          </ProductConsumer>
        </div>
      </div>
    </div>
  );
};

export default CartList;
