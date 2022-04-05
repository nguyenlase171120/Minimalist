import { Link, useNavigate } from "react-router-dom";

function SubNavBarChildren() {
  const navigate = useNavigate();
  const handleScroll = (category) => {
    window.scrollTo({ top: 100, behavior: "smooth" });
    navigate(`/category/${category}`);
  };

  return (
    <div className="absolute top-full left-[-60px] ">
      <ul className=" bg-white border-2 border-[#D8B975] w-[222px] flex items-center justify-center flex-col">
        <li
          className="header-sub-link"
          onClick={() => handleScroll("Minimalism")}
        >
          Minimalism
        </li>

        <li
          className="header-sub-link"
          onClick={() => handleScroll("Lifestyle")}
        >
          Life Style
        </li>
        <li className="header-sub-link" onClick={() => handleScroll("Nhật ký")}>
          Nhật ký
        </li>

        <li
          className="header-sub-link"
          onClick={() => handleScroll("Cuộc sống ở Nhật Bản")}
        >
          Cuộc sống ở nhật bản
        </li>

        <li
          className="header-sub-link"
          onClick={() => handleScroll("Cuộc sống ở Hà Nội")}
        >
          Cuộc sống ở Hà Nội
        </li>

        <li
          className="header-sub-link"
          onClick={() => handleScroll("Hành trình của mình")}
        >
          Hành trình của mình
        </li>

        <li
          className="header-sub-link"
          onClick={() => handleScroll("Học ngoại ngữ")}
        >
          Học ngoại ngữ
        </li>

        <li
          className="header-sub-link"
          onClick={() => handleScroll("Productivity")}
        >
          Productivity
        </li>

        <li
          className="header-sub-link"
          onClick={() => handleScroll("Đọc sách")}
        >
          Đọc sách
        </li>

        <li className="header-sub-link" onClick={() => handleScroll("Nấu Ăn")}>
          Nấu ăn
        </li>

        <li
          className="text-[13px]text-black pt-2 pb-4 w-[70%]  text-black text-center hover:text-[#D8B975]"
          onClick={() => handleScroll("Khám phá & Du lịch")}
        >
          Khám phá du lịch
        </li>
      </ul>
    </div>
  );
}

export default SubNavBarChildren;
