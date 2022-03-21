import { Link } from "react-router-dom";

function SubNavBarChildren() {
  const handleScroll = () => {
    window.scrollTo({ top: 100, behavior: "smooth" });
  };

  return (
    <div className="absolute top-full left-[-60px] ">
      <ul className=" bg-white border-2 border-[#D8B975] w-[222px] flex items-center justify-center flex-col">
        <li className="header-sub-link">
          <Link to="/">Minimalism</Link>
        </li>

        <li className="header-sub-link">
          <Link to="/category/Lifestyle" onClick={handleScroll}>
            Life Style
          </Link>
        </li>
        <li className="header-sub-link">
          <Link to="/category/Nhật ký" onClick={handleScroll}>
            Nhật ký
          </Link>
        </li>

        <li className="header-sub-link">
          <Link to="/category/Cuộc sống ở nhật bản">Cuộc sống ở Nhật Bản</Link>
        </li>

        <li className="header-sub-link">
          <Link to="/category/Cuộc sống ở Hà Nội" onClick={handleScroll}>
            Cuộc sống ở Hà Nội
          </Link>
        </li>

        <li className="header-sub-link">
          <Link to="/category/Hành trình của mình" onClick={handleScroll}>
            Hành trình của mình
          </Link>
        </li>

        <li className="header-sub-link">
          <Link to="/category/Học ngoại ngữ" onClick={handleScroll}>
            Học ngoại ngữ{" "}
          </Link>
        </li>

        <li className="header-sub-link">
          <Link to="/">Productivity</Link>
        </li>

        <li className="header-sub-link">
          <Link to="/">Đọc sách</Link>
        </li>

        <li className="header-sub-link">
          <Link to="/">Nấu ăn</Link>
        </li>

        <li className="text-[13px]text-black pt-2 pb-4 w-[70%]  text-black text-center hover:text-[#D8B975]">
          <Link to="/">Khám phá du lịch</Link>
        </li>
      </ul>
    </div>
  );
}

export default SubNavBarChildren;
