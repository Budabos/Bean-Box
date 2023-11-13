import { useState } from "react";
import NavItem from "./NavItem";
import NavLinkItem from "./NavLinkItem";
import SearchBar from "../../utils/SearchBar";
import TopNav from "./TopNav";
import { BsCart4 } from "react-icons/bs";
import { IoSearchOutline } from "react-icons/io5";
import { VscMenu } from "react-icons/vsc";
import Logo from "../Logo";

const NavBar = () => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <>
      <TopNav />
      <nav className="tw-overflow-hidden tw-px-8 tw-flex tw-items-center">
        <div className="app__navbar-logo">
          <Logo />
        </div>
        <ul className="app__navbar-links tw-flex tw-items-center tw-justify-center tw-gap-8 tw-flex-1">
          <NavLinkItem text="Home" redirect={"/"} />
          <NavLinkItem text="Store" redirect={"/products"} />
          <NavLinkItem text="About us" redirect={"/about-us"} />
          <NavLinkItem text="Contact us" redirect={"/contact-us"} />
        </ul>
        <div className="lst">
          <ul className="navbar-lst tw-flex tw-items-center tw-gap-2 tw-relative">
            <SearchBar showSearch={showSearch} />
            <NavItem
              icon={<IoSearchOutline size={20} />}
              setShowSearch={setShowSearch}
            />
            <NavItem
              icon={<BsCart4 className="tw-overflow-visible" size={20} />}
            />
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
