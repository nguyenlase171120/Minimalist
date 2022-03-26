import React from "react";
import CommentChildren from "./CommentChildren";

const CommentContainer = ({ title }) => {
  return (
    <div className="w-full">
      <h1 className="w-full text-center text-[20px] uppercase mb-10">
        5 Thoughts on "{title}"
      </h1>
      <CommentChildren />
    </div>
  );
};

export default CommentContainer;
