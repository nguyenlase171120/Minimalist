import React, { useEffect, useState } from "react";
import { PostApi } from "../../../api/posts/PostApi";
import SearchChildren from "../children/SearchChildren";
import { useParams } from "react-router-dom";
import RingLoader from "react-spinners/RingLoader";

const SearchContainer = () => {
  const [listPosts, setListPosts] = useState([]);
  const { title } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const result = await PostApi.getPostBySearch(title);
      setListPosts(result.data);
    };
    fetchData();
  }, [title]);

  return (
    <div>
      {listPosts.length > 0 ? (
        <SearchChildren listPosts={listPosts} titleSearch={title} />
      ) : (
        <div className="text-center">
          <RingLoader color={"#123abc"} loading={true} css="" size={40} />
        </div>
      )}
    </div>
  );
};

export default SearchContainer;
