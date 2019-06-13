import React from "react";
import { ProductConsumer } from "../../context/context";
import styled from "styled-components";

const FilterProducts = () => {
  return (
    <ProductConsumer>
      {value => {
        const {
          storeProducts,
          search,
          filterPrice,
          max,
          min,
          shipping,
          handleFiltering,
          company
        } = value;

        const companies = [
          ...new Set([...storeProducts.map(item => item.company), "all"])
        ];

        return (
          <div className="row my-5">
            <div className="col-10 mx-auto">
              <FilterWrapper>
                {/* Text filter */}
                <div>
                  <label htmlFor="search"> Search products :</label>
                  <input
                    type="text"
                    name="search"
                    id="search"
                    classe="filter-item"
                    value={search}
                    onChange={handleFiltering}
                  />
                </div>

                {/* End Text filter */}

                {/* Categorie filter */}
                <div>
                  <label htmlFor="company"> Company :</label>
                  <select
                    name="company"
                    id="company"
                    value={company}
                    onChange={handleFiltering}
                    className="filter-item"
                  >
                    {companies.map((company, index) => (
                      <option value={company} key={index}>
                        {company}
                      </option>
                    ))}
                  </select>
                </div>
                {/* End Categorie filter */}

                {/* Price filter */}
                <div>
                  <label htmlFor="filterPrice">
                    <p className="mb-2">
                      Price : <span>{filterPrice}</span>
                    </p>
                  </label>
                  <input
                    type="range"
                    name="filterPrice"
                    id="filterPrice"
                    className="filter-price"
                    value={filterPrice}
                    max={max}
                    min={min}
                    onChange={handleFiltering}
                  />
                </div>
                {/* End Price filter */}

                {/* free Sheppin filter */}
                <div>
                  <label htmlFor="shipping" className="mx-2">
                    Free shipping :
                  </label>
                  <input
                    type="checkbox"
                    name="shipping"
                    id="shipping"
                    checked={shipping && true}
                    onChange={handleFiltering}
                  />
                </div>
                {/* End free Sheppin filter */}
              </FilterWrapper>
            </div>
          </div>
        );
      }}
    </ProductConsumer>
  );
};

const FilterWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 1rem;
  label {
    font-weight: bold;
    text-transform: capitalize;
  }
  .filter-item,
  .filter-price {
    display: block;
    width: 100%;
    background: transparent;
    border-radius: 0.5rem;
    border: 2px solid var(--darkGrey);
  }
`;
export default FilterProducts;
