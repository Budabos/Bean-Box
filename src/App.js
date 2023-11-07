import React from "react";
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

function App() {
  return (
    <>
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
      <Newsletter/>
      <Footer />
    </>
  );
}

export default App;
