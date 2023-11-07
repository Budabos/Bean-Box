import React from "react";
import TopNav from "./NavComponents/TopNav";
import NavBar from "./NavComponents/NavBar";
import NavLogo from "./NavComponents/NavLogo";
import NavItem from "./NavComponents/NavItem";
import { BsCart4 } from "react-icons/bs";
import { IoSearchOutline } from "react-icons/io5";
import { VscMenu } from "react-icons/vsc";

function App() {
  return (
    <>
      <TopNav />
      <NavBar>
        <>
          <NavLogo/>
          <NavItem icon={<IoSearchOutline />} />
          <NavItem icon={<BsCart4 />} />
          <NavItem icon={<VscMenu />} />
        </>
      </NavBar>
    </>
  );
}

export default App;
