import React from "react";
import Logo from "../components/Logo";
import SocialLinks from "../components/SocialLinks";
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
            <Link
              key={value}
              to={value}
              className="tw-text-black hover:tw-text-black tw-no-underline tw-overflow-hidden tw-relative after:tw-absolute after:tw-content-[''] after:tw-bottom-[0px] after:tw-w-full after:tw-h-[2px] after:tw-bg-black after:tw-scale-0 hover:after:tw-scale-100 after:tw-transition-all"
            >
              <li>{text}</li>
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
