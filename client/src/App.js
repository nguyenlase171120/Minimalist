import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import FooterBlog from "./components/Footer/FooterBlog";
import SidebarBlog from "./components/SideBar/SidebarBlog";
import HeaderContainer from "./pages/header/container/HeaderContainer";
import HomeChildren from "./pages/home/childrens/HomeChildren";
import HomeContainer from "./pages/home/container/HomeContainer";

function App() {
  useEffect(() => {
    localStorage.setItem(
      "token",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MjFiMDY0MzdkOTQyYTQzOWM1YTBjNGQiLCJpYXQiOjE2NDkwNDU2MDksImV4cCI6MTY4MDU4MTYwOX0.XvSkt2XL_w_1sHVCxZ1WdQDTkChD3af9WZ3HxiPsm-w"
    );
  }, []);

  return (
    <div>
      <HeaderContainer />

      <HomeChildren />
      <div className="px-[12%] flex">
        <Routes>
          <Route path="/*" element={<HomeContainer />} />
        </Routes>

        <div className=" mt-[100px] w-[25%] ml-[100px] ">
          <SidebarBlog />
        </div>
      </div>
      <FooterBlog />
    </div>
  );
}

export default App;
