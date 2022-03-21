import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { FaAngleDown } from "react-icons/fa";
import SubNavBarChildren from "./SubNavBarChildren";
function NavbarChildren() {
  const [show, setShow] = useState(false);
  const [click, setClick] = useState(1);

  const handleShow = () => {
    setShow(true);
  };

  const handleHide = () => {
    setShow(false);
  };

  useEffect(() => {
    const item = document.getElementById(`${click}`);
    item.style.color = "#D8B975";
  }, [click]);

  const handleClick = (id) => {
    const itemPrev = document.getElementById(`${click}`);
    itemPrev.style.color = "#333";
    setClick(id);
  };

  return (
    <div className="h-full">
      <ul className="flex items-center h-full uppercase text-[13px] ">
        <li className="header-link" id="1" onClick={() => handleClick(1)}>
          <Link to="/">Home</Link>
        </li>
        <li
          className="header-link flex  items-center relative "
          onMouseOver={handleShow}
          onMouseLeave={handleHide}
          onClick={() => handleClick(2)}
          id="2"
        >
          <Link to="/">blog</Link>
          {show && <SubNavBarChildren />}
          <FaAngleDown className="text-[18px] pl-2 cursor-pointer" />
        </li>
        <li className="header-link" id="3" onClick={() => handleClick(3)}>
          <a href="https://www.youtube.com/channel/UCZv-924OFOCEX6A8hcvdisQ?view_as=subscriber">
            youtube
          </a>
        </li>
        <li className="header-link" id="4" onClick={() => handleClick(4)}>
          <Link to="/ung-ho">ủng hộ</Link>
        </li>
        <li className="header-link" id="5" onClick={() => handleClick(5)}>
          <Link to="/about-me">About me</Link>
        </li>
        <li className="header-link" id="6" onClick={() => handleClick(6)}>
          <Link to="/japanese">日本語</Link>
        </li>
      </ul>
    </div>
  );
}

export default NavbarChildren;
