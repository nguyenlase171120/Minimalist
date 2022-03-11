import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

function HomeChildrenBody({ data }) {
  return (
    <div className="flex items-center justify-center flex-col mb-10 ">
      <Link to="/">
        <h2 className="text-[20px] uppercase mt-5 mb-2 tracking-widest text-center">
          {data.title}
        </h2>
      </Link>
      <p>---------------KIRA --------------</p>
      <div className="flex items-center my-2 justify-center text-center text-[14px] text-[#767676]">
        <p className="mr-2">{data.updatedAt.slice(0, 10)}</p>
        <p>Reading time 9 minutes</p>
      </div>
      <Link to="/">
        <img src={data.image} alt="error image" />
      </Link>
      <p className="my-2">{data.descriptionTrailer} [...]</p>
      <div className="flex items-center relative w-full">
        <button className="uppercase w-full py-2 bg-[#DDDDDD] my-2 hover:bg-opacity-75">
          read more
        </button>
        <AiOutlineArrowRight className="absolute top-[1/2] right-10 cursor-pointer" />
      </div>
    </div>
  );
}

export default HomeChildrenBody;
