import React from "react";
import HomeChildrenBody from "./HomeChildrenBody";
import RingLoader from "react-spinners/RingLoader";

const HomeChildrenList = ({ listPosts }) => {
  return (
    <div>
      <div className="flex items-center justify-between flex-wrap">
        {listPosts ? (
          listPosts.map((value, item) => {
            return (
              <div className="w-[45%] flex justify-center">
                <HomeChildrenBody data={value} />
              </div>
            );
          })
        ) : (
          <div className="text-center">
            <RingLoader color={"#123abc"} loading={true} css="" size={40} />
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeChildrenList;
