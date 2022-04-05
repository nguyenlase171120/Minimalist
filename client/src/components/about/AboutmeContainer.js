import React, { useEffect, useState } from "react";
import { PostApi } from "../../api/posts/PostApi";
import AboutmeChildren from "./AboutmeChildren";
import RingLoader from "react-spinners/RingLoader";

const AboutmeContainer = () => {
  const [about, setAbout] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const result = await PostApi.getPostById("623fddaba4fcba5984d9c5d6");

      if (result) {
        setAbout(result.data);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {about ? (
        <AboutmeChildren data={about} />
      ) : (
        <div className="text-center">
          <RingLoader color={"#123abc"} loading={true} css="" size={40} />
        </div>
      )}
    </div>
  );
};

export default AboutmeContainer;
