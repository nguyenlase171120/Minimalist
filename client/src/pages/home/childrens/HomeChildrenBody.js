import { AiOutlineArrowRight } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

function HomeChildrenBody({ data }) {
  const navigate = useNavigate();
  const handlePost = (id) => {
    window.scrollTo(0, 0);
    navigate(`/detail/${id}`);
  };

  return (
    <div className="flex items-center justify-center flex-col mb-10 ">
      <h2
        className="text-[20px] uppercase mt-5 mb-2 tracking-widest text-center cursor-pointer"
        onClick={() => handlePost(data._id)}
      >
        {data.title}
      </h2>

      <p>---------------KIRA --------------</p>
      <div className="flex items-center my-2 justify-center text-center text-[14px] text-[#767676]">
        <p className="mr-2">{data.updatedAt.slice(0, 10)}</p>
        <p>Reading time 9 minutes</p>
      </div>

      <img
        src={data.image}
        alt="error image"
        className="cursor-pointer"
        onClick={() => handlePost(data._id)}
      />
      <p className="my-2">{data.descriptionTrailer} [...]</p>
      <div
        className="flex items-center relative w-full"
        onClick={() => handlePost(data._id)}
      >
        <button className="uppercase w-full py-2 bg-[#DDDDDD] my-2 hover:bg-opacity-75">
          read more
        </button>
        <AiOutlineArrowRight className="absolute top-[1/2] right-10 cursor-pointer" />
      </div>
    </div>
  );
}

export default HomeChildrenBody;
