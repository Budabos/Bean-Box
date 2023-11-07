import React from "react";
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";

const SocialLinks = () => {
  return (
    <div className="flex items-center gap-3">
      <Facebook fill="white" color="transparent" />
      <Instagram />
      <Twitter fill="white" color="transparent" />
      <Linkedin fill="white" color="transparent" />
      <Youtube fill="white" color="#431407" />
    </div>
  );
};

export default SocialLinks;
