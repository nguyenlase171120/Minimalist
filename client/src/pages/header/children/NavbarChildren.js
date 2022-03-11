import React, { useState } from "react";
import { Link } from "react-router-dom";

import { FaAngleDown } from "react-icons/fa";
import SubNavBarChildren from "./SubNavBarChildren";
function NavbarChildren() {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(true);
  };

  const handleHide = () => {
    setShow(false);
  };

  return (
    <div className="h-full">
      <ul className="flex items-center h-full uppercase text-[13px] ">
        <li className="header-link ">
          <Link to="/">Home</Link>
        </li>
        <li
          className="header-link flex  items-center relative "
          onMouseOver={handleShow}
          onMouseLeave={handleHide}
        >
          <Link to="/">blog</Link>
          {show && <SubNavBarChildren />}
          <FaAngleDown className="text-[18px] pl-2 cursor-pointer" />
        </li>
        <li className="header-link">
          <a href="https://www.youtube.com/channel/UCZv-924OFOCEX6A8hcvdisQ?view_as=subscriber">
            youtube
          </a>
        </li>
        <li className="header-link">
          <Link to="/ung-ho">ủng hộ</Link>
        </li>
        <li className="header-link">
          <Link to="/about-me">About me</Link>
        </li>
        <li className="header-link">
          <Link to="/japanese">日本語</Link>
        </li>
      </ul>
    </div>
  );
}

export default NavbarChildren;
