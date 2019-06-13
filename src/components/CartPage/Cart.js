import React from "react";
import CartColumns from "./CartColumns";
import CartList from "./CartList";
import CartTotals from "./CartTotals";
import CartItem from "./CartItem";

const Cart = () => {
  return (
    <section className="py-5">
      <CartColumns />
      <CartList />

      <CartTotals />
    </section>
  );
};

export default Cart;
