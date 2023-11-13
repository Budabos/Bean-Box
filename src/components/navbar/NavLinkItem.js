import { Link } from "react-router-dom";

const NavLinkItem = ({ text, links, redirect }) => {
  return (
    <li className="tw-overflow-hidden ">
      <Link to={redirect} className="tw-no-underline">
        <span className="dropbtn tw-capitalize tw-bg-white tw-text-black tw-font-semibold tw-relative after:tw-absolute after:tw-content-[''] after:tw-bottom-[-5px] after:tw-left-0 after:tw-w-full after:tw-h-[2px] after:tw-bg-black after:tw-scale-0 hover:after:tw-scale-100 after:tw-transition-all">
          {text}
        </span>
      </Link>{" "}
    </li>
  );
};

export default NavLinkItem;
