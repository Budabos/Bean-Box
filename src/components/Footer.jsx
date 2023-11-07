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
    <div className="bg-amber-950 px-16 py-20 text-white">
      <div className="flex items-center justify-between">
        <Logo />
        <ul className="flex items-center text-[16px] leading-[24px] font-semibold gap-8">
          {links.map(({text, value}) => (
            <li key={text} className="cursor-pointer hover:text-neutral-400">{text}</li>
          ))}
        </ul>
        <SocialLinks />
      </div>
      <hr className="mt-20" />
      <div className="mt-8 flex items-center justify-center gap-6">
        <span>© {year} Bean Box. All rights reserved.</span>
      </div>
    </div>
  );
};

export default Footer;
