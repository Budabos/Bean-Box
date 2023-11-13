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
    const { name, value } = e.target;

    // Updating the form data based on user input
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Rendering the form for creating a new product
  return (
    <div className="tw-flex tw-flex-col tw-items-center tw-gap-[15px]">
      <h2 className="tw-text-center tw-font-edu tw-font-bold tw-overflow-hidden">
        Create a product
      </h2>
      <form className="tw-w-1/3">
        {/* Form fields for different product attributes */}
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            placeholder="John Doe"
            onChange={handleChange}
          />
        </div>
        {/* ... Repeat similar form fields for other attributes ... */}
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select
            className="form-control"
            id="category"
            name="category"
            onChange={handleChange}
          >
            <option value="drinks">Drinks</option>
            <option value="beans">Beans</option>
          </select>
        </div>

        {/* Submit button */}
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
