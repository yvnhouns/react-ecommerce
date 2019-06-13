import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Default from "./pages/Default";
import About from "./pages/AboutPage";
import Cart from "./pages/CartPage";
import Contact from "./pages/ContactPage";
import Home from "./pages/HomePage";
import Products from "./pages/ProductsPage";
import SingleProduct from "./pages/SingleProductPage";

/* components */
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import SideCard from "./components/SideCard";

//import styled from "styled-components";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <SideCard />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/products" exact component={Products} />
        <Route path="/about" component={About} />
        <Route path="/card" component={Cart} />
        <Route path="/contact" component={Contact} />
        <Route path="/product/:id" component={SingleProduct} />
        <Route component={Default} />
      </Switch>
      <Footer />
    </>
  );
}

//const color = "#f15025";
/*
const Button2 = styled.button`
  color: blue;
  background: ${color};
  font-size: ${props => (props.large ? "3rem" : "1rem")};
`;

const Button = styled.button`
  color: blue;
  background: blue;
  font-size: 2rem;
`;
*/
export default App;
