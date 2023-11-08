import React from "react";
import Login from "./Login";
import Newsletter from "./Newsletter";
import ProductsList from "./ProductsList";
import Hero from "./Hero";

const Home = ({products, setProducts}) => {

  //Get the first 8 products
  const renderedProducts = products.slice(0,9);

  return (
    <>
      <Hero />
      <h2 className="tw-font-edu tw-font-bold">Pick Your Favourite</h2>
      <ProductsList products={renderedProducts} setProducts={setProducts} />
      <Newsletter />
    </>
  );
};

export default Home;
