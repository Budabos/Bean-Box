import React from "react";
import Logo from "./Logo";
import SocialLinks from "./SocialLinks";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();
  const links = [
    {
      text: "About us",
      value: "/about-us",
    },
    {
      text: "Shop now",
      value: "/products",
    },
    {
      text: "Contact us",
      value: "/contact-us",
    },
  ];

  return (
    <div className="tw-px-16 tw-py-20 tw-text-black">
      <div className="tw-flex tw-items-center tw-justify-between">
        <Logo />
        <ul className="tw-flex tw-items-center tw-text-[16px] tw-leading-[24px] tw-font-semibold tw-gap-8">
          {links.map(({ text, value }) => (
            <Link  key={value} to={value}>
              <li
                className="tw-cursor-pointer tw-text-black tw-no-underline tw-capitalize tw-hover:tw-text-black-400"
              >
                {text}
              </li>
            </Link>
          ))}
        </ul>
        <SocialLinks />
      </div>
      <hr className="tw-mt-20" />
      <div className="tw-mt-8 tw-flex tw-items-center tw-justify-center tw-gap-6">
        <span>© {year} Bean Box. All rights reserved.</span>
      </div>
    </div>
  );
};

export default Footer;
