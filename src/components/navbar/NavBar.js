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
      <nav className="navbar">
        <div className="app__navbar-logo">
          bean box
        </div>
        <div>
          <ul className="app__navbar-links">
            {[
              <NavLinkItem products="products" />,
              <NavLinkItem products="Store" />,
              <NavLinkItem products="About us" />,
              <NavLinkItem products="Stories" />,
            ].map((item) => (
              <li key={`link-${item}`}>
                <a href={`#${item}`}>{item}</a>
              <NavLinkItem
                products="products"
                redirect={'/products'}
            
              />,
              <NavLinkItem products="Store" redirect={'/products'}/>,
              <NavLinkItem products="About us" redirect={'/about-us'}/>,
              <NavLinkItem products="Stories" redirect={'/about-us'}/>,
            ].map((item, index) => (
              <li key={`link-${index}`}>
                <a href={`#${index}`}>{item}</a>
              </li>
            ))}
          </ul>
        </div>
        <SearchBar/>
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
