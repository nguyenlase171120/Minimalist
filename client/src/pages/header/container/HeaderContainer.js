import React from "react";
import IconsChildren from "../children/IconsChildren";
import NavbarChildren from "../children/NavbarChildren";

function HeaderContainer() {
  return (
    <div className="h-[60px] bg-[#ECECEC] flex justify-between px-16 fixed top-0 right-0 left-0 z-50">
      <NavbarChildren />
      <IconsChildren />
    </div>
  );
}

export default HeaderContainer;
