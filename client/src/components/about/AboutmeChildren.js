import React from "react";
import SharePost from "../Share/SharePost";

const AboutmeChildren = ({ data }) => {
  return (
    <div>
      <h1 className="text-center font-thin text-[25px] tracking-wider mb-10 uppercase">
        {data.title}
      </h1>
      <div className="flex justify-center flex-col">
        <h1 className="font-semibold mb-2 text-[18px]">About me</h1>
        <img src={data.image} alt="error" className="mb-2" />
        {data.description.map((item) => {
          const text = item.descriptionText.map((item2) => {
            return item2.text;
          });
          return (
            <div className="flex justify-center flex-col">
              <h1 className="mb-4 font-bold">{item.titleDescription}</h1>
              <p className="mb-4">{text}</p>
            </div>
          );
        })}
      </div>
      <SharePost />
    </div>
  );
};

export default AboutmeChildren;
