import { Link } from "react-router-dom";

const NavLinkItem = ({ text, links, redirect }) => {
  return (
    <li className="tw-overflow-hidden">
      <a href="#news">
        <div class="dropdown">
          <Link to={redirect}>
            <button class="dropbtn">{text}</button>
          </Link>
          <div class="dropdown-content">{links}</div>
        </div>
      </a>
    </li>
  );
};

export default NavLinkItem;
