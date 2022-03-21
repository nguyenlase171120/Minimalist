import React from "react";
import HomeChildrenList from "../../home/childrens/HomeChildrenList";

const SearchChildren = ({ listPosts, titleSearch }) => {
  return (
    <div>
      <h1 className="text-center text-[35px]  mb-10 tracking-wider">
        Search Result for : {titleSearch}
      </h1>

      <HomeChildrenList listPosts={listPosts} />
    </div>
  );
};

export default SearchChildren;
