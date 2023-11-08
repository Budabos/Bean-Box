import React from "react";
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";

const SocialLinks = () => {
  return (
    <div className="tw-flex tw-items-center tw-gap-3">
      <Facebook className="tw-cursor-pointer" fill="black" color="transparent" />
      <Instagram className="tw-cursor-pointer" />
      <Twitter className="tw-cursor-pointer" fill="black" color="transparent" />
      <Linkedin className="tw-cursor-pointer" fill="black" color="transparent" />
      <Youtube className="tw-cursor-pointer" fill="black" color="white" />
    </div>
  );
};

export default SocialLinks;
