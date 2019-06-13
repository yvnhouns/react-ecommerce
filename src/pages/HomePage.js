import React from "react";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import Services from "../components/HomePage/Services";
import Featured from "../components/HomePage/Featured";

export default function HomePage() {
  return (
    <>
      <Hero title="awesome gadgets">
        <Link to="/products" className="main-link">
          our product
        </Link>
      </Hero>
      <Services />
      <Featured />
    </>
  );
}
