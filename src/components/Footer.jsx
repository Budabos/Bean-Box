import React from "react";
import Logo from "./Logo";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  const year = new Date().getFullYear();
  const links = [
    {
      text: "About us",
      value: "",
    },
    {
      text: "Shop now",
      value: "",
    },
    {
      text: "Contact us",
      value: "",
    },
  ];

  return (
    <div className="tw-bg-amber-950 tw-px-16 tw-py-20 tw-text-white">
      <div className="tw-flex tw-items-center tw-justify-between">
        <Logo />
        <ul className="tw-flex tw-items-center tw-text-[16px] tw-leading-[24px] tw-font-semibold tw-gap-8">
          {links.map(({text, value}) => (
            <li key={text} className="tw-cursor-pointer tw-hover:tw-text-neutral-400">{text}</li>
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
