import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { BsCart4 } from "react-icons/bs";
import { IoSearchOutline } from "react-icons/io5";
import { VscMenu } from "react-icons/vsc";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import NavItem from "./components/NavItem";
import NavLogo from "./components/NavLogo";
import Products from "./components/Products";
import TopNav from "./components/TopNav";
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from "./components/Hero";

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <TopNav />
      <NavBar>
        <>
          <NavLogo />
          <NavItem icon={<IoSearchOutline />} />
          <NavItem icon={<BsCart4 />} />
          <NavItem icon={<VscMenu />} />
        </>
      </NavBar>
      <Hero/>
      <Routes>
        <Route path="/" element={<Home products={products}/>} />
        <Route path="/products" element={<Products products={products} setProducts={setProducts}/>} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
