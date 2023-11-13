import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { BsCart4 } from "react-icons/bs";
import { IoSearchOutline } from "react-icons/io5";
import { VscMenu } from "react-icons/vsc";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Footer from "./sections/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import NavBar from "./components/navbar/NavBar";
import NavItem from "./components/navbar/NavItem";
import NavLogo from "./components/navbar/NavLogo";
import { Toaster } from "react-hot-toast";
import Logo from "./components/Logo";

// Main App component
function App() {
  // State to hold the products data
  const [products, setProducts] = useState([]);
  // Fetching products data from the server on component mount
  useEffect(() => {
    fetch("https://my-json-server.typicode.com/Budabos/Bean-Box/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);
  // Rendering the main structure of the app
  return (
    <div>
      <NavBar>
        <>
          <NavLogo />
          <NavItem icon={<IoSearchOutline />} />
          <NavItem icon={<BsCart4 />} />
          <NavItem icon={<VscMenu />} />
        </>
      </NavBar>
      {/* Routing for different pages */}
      <Routes>
        <Route
          path="/"
          element={<Home products={products} setProducts={setProducts} />}
        />
        <Route
          path="/products"
          element={<Products products={products} setProducts={setProducts} />}
        />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
       {/* Footer component */}
      <Footer />
      {/* Notification toaster for displaying messages */}
      <Toaster />
    </div>
  );
}
// Exporting the App component
export default App;
