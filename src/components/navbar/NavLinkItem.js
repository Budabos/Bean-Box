import { Link } from "react-router-dom";

const NavLinkItem = ({ products, links, redirect }) => {
  return (
    <a href="#news">
      <div class="dropdown">
        <Link to={redirect}>
          <button class="dropbtn">{products}</button>
        </Link>
        <div class="dropdown-content">{links}</div>
      </div>
    </a>
  );
};

export default NavLinkItem;
