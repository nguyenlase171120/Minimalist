import React from "react";
import { FaFacebookSquare, FaInstagram, FaYoutube } from "react-icons/fa";

function IconsChildren() {
  return (
    <div className="flex items-center text-[17px] cursor-pointer ">
      <a href="https://www.facebook.com/kiranguyen2512">
        {" "}
        <FaFacebookSquare className="header-icon" />
      </a>
      <a href="https://www.instagram.com/kiranguyen__/">
        <FaInstagram className="header-icon" />
      </a>
      <a href="https://www.youtube.com/channel/UCZv-924OFOCEX6A8hcvdisQ?view_as=subscriber">
        <FaYoutube className="header-icon" />
      </a>
    </div>
  );
}

export default IconsChildren;
