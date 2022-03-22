import React from "react";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";

const SharePost = () => {
  return (
    <div className="flex justify-center flex-col ">
      <p className="my-2 uppercase tracking-wider">Share this</p>
      <div className="flex items-center mb-5">
        <button className="button-share">
          <FaTwitter className="mr-2" />
          <span>Twitter</span>
        </button>

        <button className="button-share">
          <FaFacebook className="mr-2" />
          <span>Facebook</span>
        </button>
      </div>

      <div className="flex justify-center flex-col">
        <div className="flex items-center mb-2">
          <button className="button-share">
            <AiFillStar className="mr-2 text-blue-600" />
            <span>Like</span>
          </button>
        </div>

        <div className="text-sm">
          <span className="text-[#D8B975] mr-2">13 bloggers</span>
          <span>like this</span>
        </div>
      </div>
    </div>
  );
};

export default SharePost;
