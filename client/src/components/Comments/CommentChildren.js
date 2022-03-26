import { AiFillStar } from "react-icons/ai";

const CommentChildren = () => {
  return (
    <div className="flex justify-center flex-col">
      <div className="flex items-center mb-5">
        <img
          src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
          alt="error"
          className="h-[70px] mr-5 rounded-full"
        />
        <div className="flex justify-center flex-col">
          <h1 className="uppercase text-md mb-2 hover:opacity-20 font-bold  cursor-pointer">
            Nghiên vũ
          </h1>

          <p className="text-[#D8B975] text-sm hover:text-gray-300 cursor-pointer">
            February 19, 2022 at 5:23 pm
          </p>
        </div>
      </div>

      <p className="tracking-wider mb-5">
        Bữa thấy Kira share uống trà Twinings trên story IG nên cũng tò mò cho
        vào giỏ hàng nhưng vẫn chưa chịu mua. =)))) Chắc chờ đến đợt sale tiếp
        theo phải mua về quá. ^^
      </p>

      <div className="flex items-center text-sm mb-4">
        <AiFillStar className="mr-1 text-blue-500" />
        <p>Like by</p>
        <span className="text-[#D8B975] hover:text-gray-400 ml-1 underline cursor-pointer">
          1 person
        </span>
      </div>
      <button className="bg-gray-200 uppercase py-1 px-3 tracking-wide  rounded-sm mb-5 hover:bg-gray-300 transition-all w-[10%]">
        reply
      </button>
    </div>
  );
};

export default CommentChildren;
