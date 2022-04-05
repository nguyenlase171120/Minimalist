import React, { useEffect, useState } from "react";
import HomeChildrenList from "../../pages/home/childrens/HomeChildrenList";
import RingLoader from "react-spinners/RingLoader";
import { useParams } from "react-router-dom";
import { PostApi } from "../../api/posts/PostApi";

const TagContainer = () => {
  const { tag } = useParams();
  const [listTags, setListTags] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await PostApi.getPostByTag(tag.toLowerCase());

      if (result) {
        setListTags(result.data);
      }
    };
    fetchData();
  }, [tag]);

  return (
    <div>
      <div className="flex justify-center items-center flex-col">
        <h1 className="text-[40px] tracking-widest mb-10">
          {" "}
          <span>Tag : </span> {tag}{" "}
        </h1>

        {listTags.length >= 1 ? (
          <HomeChildrenList listPosts={listTags} />
        ) : (
          <RingLoader color={"#123abc"} loading={true} css="" size={40} />
        )}
      </div>
    </div>
  );
};

export default TagContainer;
