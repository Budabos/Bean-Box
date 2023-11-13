import { Link } from "react-router-dom";

const NavLinkItem = ({ text, links, redirect }) => {
  return (
    <li className="tw-overflow-hidden tw-relative after:tw-absolute after:tw-content-[''] after:tw-bottom-[0px] after:tw-w-full after:tw-h-[2px] after:tw-bg-black after:tw-scale-100 hover:after:tw-scale-100 after:tw-transition-all">
      <Link to={redirect} className="tw-no-underline">
        <span className="dropbtn tw-capitalize tw-bg-white tw-text-black tw-font-semibold">
          {text}
        </span>
      </Link>
      <div class="dropdown-content">{links}</div>
    </li>
  );
};

export default NavLinkItem;
