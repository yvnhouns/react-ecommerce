import React from "react";
import Title from "../Title";
import Product from "../Product";
import { ProductConsumer } from "../../context";
import FilterProduct from "./FilterProduct";
const Products = () => {
  return (
    <ProductConsumer>
      {value => {
        const { filteredProducts } = value;
        return (
          <section className="py-5">
            <div className="container">
              {/* Titre  */}
              <Title center="true" title="Our Products" />
              {/* Fin Titre */}

              {/* Filtering */}
              <FilterProduct />
              {/* End filtering*/}

              {/* Resultat filtering*/}
              <div className="row pt-4">
                <div className="col-10 mx-auto">
                  <h6 className="text-title">
                    Total products : {filteredProducts.length}
                  </h6>
                </div>
              </div>
              {/* End resultat Filtering */}
              <div className="row py-5">
                {/* if not found product show not found text */}

                {filteredProducts.length === 0 ? (
                  <div className=" text-center col">
                    Désolé, Auccun produit ne correspond a votre recherche
                  </div>
                ) : (
                  filteredProducts.map(product => {
                    return <Product product={product} key={product.id} />;
                  })
                )}
              </div>
            </div>
          </section>
        );
      }}
    </ProductConsumer>
  );
};

export default Products;
