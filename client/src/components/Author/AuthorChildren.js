import React from "react";
import HomeChildrenList from "../../pages/home/childrens/HomeChildrenList";

const AuthorChildren = ({ listPosts }) => {
  console.log(listPosts);
  return (
    <div>
      <HomeChildrenList listPosts={listPosts} />
    </div>
  );
};

export default AuthorChildren;
