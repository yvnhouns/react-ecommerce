import React, { Component } from "react";
import { ProductConsumer } from "../context/context";
import styled from "styled-components";

class SideCard extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { cartOpen, closeCard } = value;
          return (
            <CardWrapper show={cartOpen} onClick={closeCard}>
              <p>Card Items</p>
            </CardWrapper>
          );
        }}
      </ProductConsumer>
    );
  }
}

const CardWrapper = styled.div`
  position: fixed;
  top: 60px;
  right: 0;
  width: 100%;
  height: 100%;
  background: var(--mainGrey);
  z-index: 1;
  border-left: 4px solid var(--primaryColor);
  transition: var(--mainTransition);
  transform: ${props => (props.show ? "translateX(0)" : "translateX(100%)")};

  @media (min-width: 576px) {
    width: 20rem;
  }
`;
export default SideCard;
