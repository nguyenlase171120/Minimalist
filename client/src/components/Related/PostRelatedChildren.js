import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const PostRelatedChildren = ({ data, next, prev }) => {
  const navigate = useNavigate();

  const handleCovertDate = (date) => {
    const dateArray = date.toString().slice(0, 10).split("-");
    const year = dateArray[0];
    const day = dateArray[2];

    // // eslint-disable-next-line default-case
    // eslint-disable-next-line default-case
    switch (dateArray[1]) {
      case "01": {
        return "January" + " " + day + ", " + year;
      }
      // eslint-disable-next-line no-duplicate-case
      case "02": {
        return "February" + day + year;
      }
      // eslint-disable-next-line no-duplicate-case
      case "03": {
        return "March" + " " + day + ", " + year;
      }
    }
  };

  const handleRelated = (id) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(`/detail/${id}`);
  };

  const handleAuthor = () => {
    window.scrollTo(0, 0);
    navigate("/author");
  };

  const handlePaging = (id) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(`/detail/${id}`);
  };

  return (
    <div>
      <hr className="w-[15%] mb-3 h-[2px] bg-black" />
      <h2 className="uppercase mb-3">related</h2>
      <div className="flex items-center w-full mb-14">
        {data.map((post) => {
          return (
            <div className="flex justify-center flex-col w-[33,3%] mr-3 text-left">
              <p
                className="text-[#D8B975] hover:text-black transition-all cursor-pointer uppercase "
                onClick={() => handleRelated(post._id)}
              >
                {post.title}
              </p>
              <p className="text-gray-400 text-sm">
                {handleCovertDate(post.createdAt)}
              </p>
              <p className="text-gray-400 text-sm font-semibold">
                In "{post.category}"
              </p>
            </div>
          );
        })}
      </div>

      <div className="flex items-center mb-10">
        <img
          src="https://thehanoichamomile.files.wordpress.com/2020/06/dbf23fb3-dba1-49ef-a02b-0fa95237ae41.jpg"
          alt="image-error"
          className="h-[100px] rounded-full mr-10"
        />
        <div>
          <div className="text-[18px] uppercase mb-3 tracking-wider  ">
            <span>Post by </span>
            <span
              className="text-[#D8B975] hover:text-gray-400 transition-all cursor-pointer"
              onClick={handleAuthor}
            >
              Thehanoichamomile
            </span>
          </div>
          <p>
            Chào mừng bạn đến với blog của mình. Đây là nơi mình thường xuyên
            chia sẻ về những câu chuyện nho nhỏ trong đời sống thường ngày của
            mình. Mình tin rằng, hạnh phúc đến từ những điều giản dị nhất. Hi
            vọng bạn sẽ tìm thấy được sự bình yên và một chút niềm vui nho nhỏ
            khi đọc blog của mình. ENJOY! ブログへようこそ！
            あるベトナム人（僕）の毎日の話です！日記だけでなく、人生話、ライフスタイル、そしてミニマリズムについて色々書いています
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between  mb-10 w-full ">
        {prev && (
          <button
            className="button-page "
            onClick={() => handlePaging(next._id)}
          >
            <div className="flex items-center text-left">
              <AiOutlineArrowLeft className="mr-3" />
              <p>{prev.title}</p>
            </div>
          </button>
        )}
        <button className="button-page " onClick={() => handlePaging(next._id)}>
          <div className="flex items-center ">
            <p>{next.title}</p>
            <AiOutlineArrowRight className="ml-3" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default PostRelatedChildren;
