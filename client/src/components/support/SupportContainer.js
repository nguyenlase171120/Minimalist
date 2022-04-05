import React, { useEffect, useState } from "react";
import { PostApi } from "../../api/posts/PostApi";
import SupportChildren from "./SupportChildren";
import RingLoader from "react-spinners/RingLoader";

const SupportContainer = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const result = await PostApi.getPostById("623fea73a4fcba5984d9f3ac");

      if (result) {
        setData(result.data);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {data ? (
        <SupportChildren data={data} />
      ) : (
        <div className="text-center">
          <RingLoader color={"#123abc"} loading={true} css="" size={40} />
        </div>
      )}
    </div>
  );
};

export default SupportContainer;
