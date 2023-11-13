import React, { useState } from "react";
// CreateProduct Component
const CreateProduct = ({ products, setProducts }) => {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: "",
    recipe: "",
    likes: "",
    flavor: "",
    price: "",
    image: "",
    category: "beans",
  });
// Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Sending a POST request to create a new product
    fetch("http://localhost:8000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        // Updating the local state with the new product data
        setProducts([...products, data]);
        // Resetting the form data after submission
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
  // Function to handle form input changes
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
 // Updating the form data based on user input
    setFormData((prev) => {
      
      return {
        ...prev,
        [name]: value,
      };
    });
  };
// Rendering the form for creating a new product
  return (
    <div className="tw-flex tw-flex-col tw-items-center tw-gap-[15px]">
      <h2 className="tw-text-center tw-font-edu tw-font-bold tw-overflow-hidden">
        Create a product
      </h2>
      <form className="tw-w-1/3">
        <div className="form-group">
          <label for="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            placeholder="John Doe"
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
            placeholder="To make a cup of [product] coffee, grind Arabica coffee beans"
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
            placeholder="https://cdn.accentuate.io/557828603966/1677786404629/Our-Coffee-Ethiopia-tabletop-production-916W-578-2x.jpg?v=1692634350716"
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
            placeholder="150"
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
            placeholder="Vanilla, Caramel, Hazelnut"
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
            placeholder="1500"
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
          className="btn btn-primary tw-mt-5"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
// Exporting the CreateProduct component
export default CreateProduct;
