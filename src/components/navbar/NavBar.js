import NavItem from "./NavItem";
import NavLinkItem from "./NavLinkItem";
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
          <>bean box</>
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
              </li>
            ))}
          </ul>
        </div>
        <div className="lst ">
          <ul className="navbar-lst ">
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
