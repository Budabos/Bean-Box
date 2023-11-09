import React, { useState } from "react";
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    fetch("http://localhost:8000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        setProducts([...products, data]);
        setFormData({
          name: "",
          recipe: "",
          likes: "",
          flavor: "",
          price: "",
          image: "",
          category: "beans",
        });
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

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
      <h2 className="tw-font-edu">All Products</h2>
      <div className="tw-flex tw-items-center tw-justify-center tw-gap-20 tw-py-9">
        <FilterBar filterBy={filterBy} setFilterBy={setFilterBy} />
        <SortBar sortBy={sortBy} setSortBy={setSortBy} />
      </div>
      <ProductsList products={filteredProducts} setProducts={setProducts} />
      <form>
        <div className="form-group">
          <label for="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            placeholder="Enter name"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label for="recipe">Recipe</label>
          <input
            type="text"
            className="form-control"
            id="recipe"
            name="recipe"
            placeholder="Enter the recipe"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label for="image">Image</label>
          <input
            type="text"
            className="form-control"
            id="image"
            name="image"
            placeholder="Enter the image url"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label for="likes">Likes</label>
          <input
            type="text"
            className="form-control"
            id="likes"
            name="likes"
            placeholder="Enter the likes"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label for="flavor">Flavor</label>
          <input
            type="text"
            className="form-control"
            id="flavor"
            name="flavor"
            placeholder="Enter the flavor"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label for="price">Price</label>
          <input
            type="text"
            className="form-control"
            id="price"
            name="price"
            placeholder="Enter the price"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label for="recipe">Category</label>
          <select
            className="form-control"
            id="category"
            name="category"
            placeholder="Enter the category"
            onChange={handleChange}
          >
            <option value="drinks">Drinks</option>
            <option value="beans">Beans</option>
          </select>
        </div>

        <button
          onClick={handleSubmit}
          type="submit"
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Products;
