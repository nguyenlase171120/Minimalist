import React, { useEffect, useState } from "react";
import { PostApi } from "../../api/posts/PostApi";
import AuthorChildren from "./AuthorChildren";
import RingLoader from "react-spinners/RingLoader";

const AuthorContainer = () => {
  const [listPosts, setListPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await PostApi.getAllPosts();

      if (result) {
        setListPosts(result.data);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1 className="text-[35px] tracking-widest mt-10 mb-5 font-medium text-center">
        Author: thehanoichamomile
      </h1>
      <p className="mb-7">
        Chào mừng bạn đến với blog của mình. Đây là nơi mình thường xuyên chia
        sẻ về những câu chuyện nho nhỏ trong đời sống thường ngày của mình. Mình
        tin rằng, hạnh phúc đến từ những điều giản dị nhất. Hi vọng bạn sẽ tìm
        thấy được sự bình yên và một chút niềm vui nho nhỏ khi đọc blog của
        mình. ENJOY! ブログへようこそ！
        あるベトナム人（僕）の毎日の話です！日記だけでなく、人生話、ライフスタイル、そしてミニマリズムについて色々書いています。
      </p>

      {listPosts.length > 0 ? (
        <AuthorChildren listPosts={listPosts} />
      ) : (
        <div className="text-center">
          <RingLoader color={"#123abc"} loading={true} css="" size={40} />
        </div>
      )}
    </div>
  );
};

export default AuthorContainer;
