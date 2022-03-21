import React, { useEffect, useState } from "react";
import HomeChildrenBody from "./HomeChildrenBody";
import RingLoader from "react-spinners/RingLoader";
import { PostApi } from "../../../api/posts/PostApi";
import HomeChildrenList from "./HomeChildrenList";

const HomeChildrenRender = () => {
  const [listPosts, setListPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(10);
  const [sizeAllPosts, setSizeAllPosts] = useState(0);
  let count = 0;

  useEffect(async () => {
    const param = {
      page,
      size,
    };

    const result = await PostApi.getPostPagination(param);
    if (result.success) {
      setLoading(true);
      setListPosts((prev) => [...prev, ...result.data]);
    }
  }, [page]);

  //Handle get all posts
  useEffect(() => {
    const fetchAllPosts = async () => {
      const result = await PostApi.getAllPosts();

      if (result) {
        setSizeAllPosts(result.data.length);
        console.log("size " + result.data.length);
      }
    };

    fetchAllPosts();
  }, []);

  //Handle for pagination
  const handlePagination = () => {
    setPage(page + 1);
  };
  return (
    <div className=" mt-10   ">
      <div className="flex items-center justify-center flex-col max-w-full ">
        {loading ? (
          listPosts.map((value, item) => {
            if (count <= 1) {
              count++;
              return <HomeChildrenBody key={item} data={value} />;
            }
          })
        ) : (
          <RingLoader color={"#123abc"} loading={true} css="" size={40} />
        )}
      </div>

      <HomeChildrenList listPosts={listPosts} />
      {listPosts.length < sizeAllPosts ? (
        <div className="flex items-center justify-center">
          <button
            className="uppercase mt-10 mb-24 py-2 px-5 tracking-widest bg-[#DDDDDD] hover:bg-opacity-75"
            onClick={handlePagination}
          >
            Older post
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default HomeChildrenRender;
