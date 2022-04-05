import { AiFillStar } from "react-icons/ai";

const CommentChildren = () => {
  const listComments = [
    {
      image:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
      name: "Nghiên Vũ",
      date: "February 19, 2022 at 5:23 pm",
      text: "Bữa thấy Kira share uống trà Twinings trên story IG nên cũng tò mò cho vào giỏ hàng nhưng vẫn chưa chịu mua =)))) Chắc chờ đến đợt sale tiếp theo phải mua về quá. ^^",
      numberLike: 2,
    },
    {
      image:
        "https://images.unsplash.com/photo-1495216875107-c6c043eb703f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
      name: "Alex",
      date: "January 20, 2022 at 3:23 pm",
      text: "Cảm ơn anh Kira đã ra blog này. Cũng may em vừa đặt quyến Lối sống tối giản của người Nhật",
      numberLike: 3,
    },
  ];

  return (
    <div className="flex justify-center flex-col">
      {listComments.map((comment) => {
        return (
          <div className="mb-10">
            <div className="flex items-center mb-5">
              <img
                src={comment.image}
                alt="error"
                className="h-[70px] mr-5 rounded-full"
              />
              <div className="flex justify-center flex-col">
                <h1 className="uppercase text-md mb-2 hover:opacity-20 font-bold  cursor-pointer">
                  {comment.name}
                </h1>

                <p className="text-[#D8B975] text-sm hover:text-gray-300 cursor-pointer">
                  {comment.date}
                </p>
              </div>
            </div>

            <p className="tracking-wider mb-5">{comment.text}</p>

            <div className="flex items-center text-sm mb-4">
              <AiFillStar className="mr-1 text-blue-500" />
              <p>Like by</p>
              <span className="text-[#D8B975] hover:text-gray-400 ml-1 underline cursor-pointer">
                {comment.numberLike} person
              </span>
            </div>
            <button className="bg-gray-200 uppercase py-1 px-3 tracking-wide  rounded-sm mb-5 hover:bg-gray-300 transition-all w-[10%]">
              reply
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default CommentChildren;
