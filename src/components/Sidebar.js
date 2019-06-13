import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";
import styled from "styled-components";
class Sidbar extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { sidebarOpen, links, handleSidebare } = value;
          return (
            <SidebareWrapper show={sidebarOpen}>
              <ul>
                {links.map(link => {
                  return (
                    <li key={link.id}>
                      <Link
                        to={link.path}
                        onClick={handleSidebare}
                        className="sidebare-link"
                      >
                        {link.text}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </SidebareWrapper>
          );
        }}
      </ProductConsumer>
    );
  }
}

const SidebareWrapper = styled.nav`
  position: fixed;
  top: 61px;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--mainGrey);
  z-index: 1;
  border-right: 4px solid var(--primaryColor);
  transition: var(--mainTransition); /*all 0.5s ease-in-out; */
  transform: ${props => (props.show ? "translateX(0)" : "translateX(-100%)")};
  ul {
    list-style-type: none;
    padding: 0 !important;
  }
  .sidebare-link {
    display: block;
    font-size: 1.5em;
    text-transform: capitalize;
    color: var(--mainBlack);
    padding: 0.5rem 1.5rem;
    background: transparent;
    transition: var(--mainTransition);
  }

  .sidebare-link:hover {
    background: var(--primaryColor);
    color: var(--mainWhite);
    padding: 0.5rem 1.5rem 0.5rem 2.5rem;
    text-decoration: none;
  }

  @media (min-width: 576px) {
    width: 20rem;
  }
`;
export default Sidbar;
