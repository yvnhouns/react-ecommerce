import React from "react";
import Title from "../Title";

const CartColumns = () => {
  return (
    <section className="py-5">
      {/* Title */}
      <Title title="Your Card Items" center="true" />
      {/* Columns */}
      <div className="container-fluid text-center d-none d-lg-block my-5">
        <div className="row">
          {/* colonne Products */}
          <div className="col-lg-2">
            <p className="text-uppercase"> Products </p>
          </div>
          {/* Fin colonne Products */}
          {/* colonne Name of Product */}
          <div className="col-lg-2">
            <p className="text-uppercase"> Name of Product </p>
          </div>
          {/* Fin colonne Name of Product */}
          {/* colonne Price */}
          <div className="col-lg-2">
            <p className="text-uppercase"> Price </p>
          </div>
          {/* Fin colonne Price */}
          {/* colonne Quantity */}
          <div className="col-lg-2">
            <p className="text-uppercase"> Quantity </p>
          </div>
          {/* Fin colonne Quantity */}
          {/* colonne Remove */}
          <div className="col-lg-2">
            <p className="text-uppercase"> Remove </p>
          </div>
          {/* Fin colonne Remove */}
          {/* colonne Total */}
          <div className="col-lg-2">
            <p className="text-uppercase"> Total </p>
          </div>
          {/* Fin colonne Total */}
        </div>
      </div>
    </section>
  );
};

export default CartColumns;
