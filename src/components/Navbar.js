import React, { Component } from "react";
import { FaBars, FaCartPlus } from "react-icons/fa";
import styled from "styled-components";
import { ProductConsumer } from "../context";
import logo from "../images/logo.svg";

class Navbar extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { handleCard, handleSidebare, cartItems } = value;
          return (
            <NavWrapper>
              <div className="nav-center">
                <FaBars className="nav-icon" onClick={handleSidebare} />
                <img src={logo} alt="Mon Store" />
                <div className="nav-card">
                  <FaCartPlus className="nav-icon" onClick={handleCard} />
                  <div className="cart-items"> {cartItems}</div>
                </div>
              </div>
            </NavWrapper>
          );
        }}
      </ProductConsumer>
    );
  }
}

export default Navbar;

const NavWrapper = styled.nav`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  width: 100%;
  padding: 1rem 5rem;
  border-bottom: 3px solid var(--primaryColor);
  background: var(--mainGrey);

  .nav-center {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1170px;
    margin: 0 auto;
  }
  .nav-icon {
    font-size: 1.5em;
    cursor: pointer;
  }
  .nav-card {
    position: relative;
  }
  .cart-items {
    background: var(--primaryColor);
    color: var(--mainWhite);
    font-size: 0.85rem;
    top: -8px;
    right: -8px;
    padding: 0 5px;
    border-radius: 50px;

    position: absolute;
  }
`;
