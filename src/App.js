
import React from "react";
import TopNav from "./Components/TopNav";
import NavBar from "./Components/NavBar";
import NavLogo from "./Components/NavLogo";
import Login from './Login';
import NavItem from "./Components/NavItem";
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
 <Login/>
    </>
  );

}

export default App;
