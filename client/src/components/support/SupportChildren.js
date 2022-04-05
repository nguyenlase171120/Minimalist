import React from "react";
import SharePost from "../Share/SharePost";

const SupportChildren = ({ data }) => {
  return (
    <div>
      <h1 className="text-center text-[20px] font-medium tracking-wider mb-10">
        {data.title}
      </h1>
      <div className="flex justify-center flex-col">
        {data.description.map((item) => {
          const text = item.descriptionText.map((item2) => {
            return (
              <div className="flex justify-center flex-col">
                <p className="mb-4">{item2.text}</p>
                <a
                  href="https://www.buymeacoffee.com/hanoichamomile"
                  className="w-[30%]"
                >
                  <img src={item2.image} className="mb-4" />
                </a>
              </div>
            );
          });

          return (
            <div className="flex justify-center flex-col">
              <h1 className="mb-4 font-bold">{item.titleDescription}</h1>
              {text}
            </div>
          );
        })}
      </div>

      <SharePost />
    </div>
  );
};

export default SupportChildren;
