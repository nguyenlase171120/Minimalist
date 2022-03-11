import { Link } from "react-router-dom";
import IconsChildren from "../../header/children/IconsChildren";

function HomeChildren() {
  return (
    <div className="flex items-center justify-center mt-[60px] uppercase  flex-col">
      <Link to="/" className="text-[64px] tracking-widest pl-3 ">
        kira
      </Link>

      <p>---------------KIRA --------------</p>
      <p className="text-[13px] font-bold mt-2 mb-5 pl-3 tracking-wider  flex justify-center">
        The hanoi chamomile
      </p>

      <div className="flex justify-center  pl-3 ">
        <IconsChildren />
      </div>
    </div>
  );
}

export default HomeChildren;
