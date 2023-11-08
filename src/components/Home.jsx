import React from "react";
import Login from "./Login";
import Newsletter from "./Newsletter";
import ProductsList from "./ProductsList";

const Home = ({products}) => {

  //Get the first 8 products
  const renderedProducts = products.slice(0,8);

  return (
    <>
      <Login />
      <h2>Products Lists</h2>
      <ProductsList products={renderedProducts} />
      <Newsletter />
    </>
  );
};

export default Home;
