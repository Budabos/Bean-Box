import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TopNav from "./components/TopNav";
import NavBar from "./components/NavBar";
import NavLogo from "./components/NavLogo";
import Login from "./Login";
import NavItem from "./components/NavItem";
import { BsCart4 } from "react-icons/bs";
import { IoSearchOutline } from "react-icons/io5";
import { VscMenu } from "react-icons/vsc";
import Footer from "./components/Footer";
import Newsletter from "./components/Newsletter";
import ProductsList from "./components/ProductsList";

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
      <h2>Products Lists</h2>
      <ProductsList products={products} />

      <TopNav />
      <NavBar>
        <>
          <NavLogo />
          <NavItem icon={<IoSearchOutline />} />
          <NavItem icon={<BsCart4 />} />
          <NavItem icon={<VscMenu />} />
        </>
      </NavBar>
      <Login />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
