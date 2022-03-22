import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PostApi } from "../../../../api/posts/PostApi";
import RingLoader from "react-spinners/RingLoader";
import DetailPostChildren from "../Children/DetailPostChildren";

const DetailPostContainer = () => {
  const { id } = useParams();
  const [postDetail, setPostDetail] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const result = await PostApi.getPostById(id);

      if (result) {
        setPostDetail(result.data);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      {postDetail ? (
        <DetailPostChildren detail={postDetail} />
      ) : (
        <RingLoader color={"#123abc"} loading={true} css="" size={40} />
      )}
    </div>
  );
};

export default DetailPostContainer;
