import NavItem from "./NavItem";
import NavLinkItem from "./NavLinkItem";
import SearchBar from "./SearchBar";
import TopNav from "./TopNav";
import { BsCart4 } from "react-icons/bs";
import { IoSearchOutline } from "react-icons/io5";
import { VscMenu } from "react-icons/vsc";

const NavBar = () => {
  return (
    <>
      <TopNav />
      <nav className="navbar tw-overflow-hidden tw-px-4">
        <div className="app__navbar-logo">bean box</div>
        <ul className="app__navbar-links">
          <NavLinkItem text='home' redirect={'/'}/>
          <NavLinkItem text="products" redirect={"/products"} />
          <NavLinkItem text="Store" redirect={"/products"} />
          <NavLinkItem text="About us" redirect={"/about-us"} />
          <NavLinkItem text="Stories" redirect={"/about-us"} />
        </ul>
        <SearchBar />
        <div className="lst ">
          <ul className="navbar-lst">
            <NavItem icon={<IoSearchOutline />} />
            <NavItem icon={<BsCart4 />} />
            <NavItem icon={<VscMenu />} />
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
