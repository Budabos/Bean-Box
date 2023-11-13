import React, { useState } from "react";
import CreateProduct from "../components/CreateProduct";
import ProductsList from "../components/ProductsList";
import FilterBar from "../utils/FilterBar";
import SortBar from "../utils/SortBar";

const Products = ({ products, setProducts }) => {
  const [sortBy, setSortBy] = useState("default");
  const [filterBy, setFilterBy] = useState("default");

  const [formData, setFormData] = useState({
    name: "",
    recipe: "",
    likes: "",
    flavor: "",
    price: "",
    image: "",
    category: "beans",
  });

  const filteredProducts = products.filter((product) => {
    if (filterBy === "default") return true;

    return product.category === filterBy;
  });

  filteredProducts.sort((a, b) => {
    if (sortBy === "default") return true;

    return a[sortBy] > b[sortBy] ? 1 : -1;
  });

  return (
    <div>
      <h2 className="tw-font-edu tw-overflow-hidden">All Products</h2>
      <div className="tw-flex tw-items-center tw-justify-center tw-gap-20 tw-py-9">
        <FilterBar filterBy={filterBy} setFilterBy={setFilterBy} />
        <SortBar sortBy={sortBy} setSortBy={setSortBy} />
      </div>
      <ProductsList products={filteredProducts} setProducts={setProducts} />
      <CreateProduct products={products} setProducts={setProducts}/>
    </div>
  );
};

export default Products;
