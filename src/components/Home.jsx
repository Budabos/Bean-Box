import React from "react";
import Login from "./Login";
import Newsletter from "./Newsletter";
import ProductsList from "./ProductsList";

const Home = ({products}) => {
  return (
    <>
      <Login />
      <h2>Products Lists</h2>
      <ProductsList products={products} />
      <Newsletter />
    </>
  );
};

export default Home;
