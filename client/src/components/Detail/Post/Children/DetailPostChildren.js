import React, { useState } from "react";
import { FaPencilAlt } from "react-icons/fa";
import { AiFillFolder, AiFillWechat } from "react-icons/ai";
import ReactPlayer from "react-player/lazy";
import { useNavigate } from "react-router-dom";
import SharePost from "../../../Share/SharePost";

const DetailPostChildren = ({ detail }) => {
  const [category, setCategory] = useState(() => {
    const listCategorys = detail.category.split(",");
    return listCategorys;
  });
  const navigate = useNavigate();

  const handleCategory = (category) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(`/category/${category.trim()}`);
  };

  const handleAuthor = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(`/author`);
  };

  return (
    <div className="flex items-center justify-center flex-col">
      <h1 className="text-[25px] tracking-widest">{detail.title}</h1>
      <p>---------------KIRA --------------</p>
      <div className="w-full">
        <div className="flex text-right mt-4">
          <div className="flex mr-6 items-center">
            <FaPencilAlt className="mr-2" />
            <span className="detail-type" onClick={handleAuthor}>
              thehanoichamomile
            </span>
          </div>

          <div className="flex mr-6 items-center">
            <AiFillFolder className="mr-2" />
            {category.length === 1 ? (
              <span
                className="detail-type"
                onClick={() => handleCategory(category[0])}
              >
                {category[0]}
              </span>
            ) : (
              category.map((item) => {
                return (
                  <span
                    className="detail-type mr-2"
                    onClick={() => handleCategory(item)}
                  >
                    {item},{" "}
                  </span>
                );
              })
            )}
          </div>

          <div className="flex  items-center">
            <AiFillWechat className="mr-2" />
            <span className="detail-type">5 Comments</span>
          </div>
        </div>
      </div>

      <div className="flex-item flex-col">
        <img src={detail.image} alt="error" className="my-7" />

        {detail.description.map((item) => {
          const title = item.titleDescription;
          const textArray = item.descriptionText;
          const linkArray = item.linkProductDesc;

          // eslint-disable-next-line no-lone-blocks

          // eslint-disable-next-line no-lone-blocks

          const titleUi = (
            <h1 className="font-bold text-left text-[20px] w-full my-5">
              {title}
            </h1>
          );

          const result = textArray.map((value) => {
            const image = value.image;
            const linkYoutube = value.linkYoutube;
            const linkProduct = value.linkProduct;

            return (
              <div className="text-[16px]  ">
                <div className="flex items-center mb-5">
                  <p key={value._id}>{value.text}</p>
                  {linkProduct && (
                    <p className="cursor-pointer ml-3 text-[#D8B975]">
                      {linkProduct}
                    </p>
                  )}
                </div>

                {image && <img src={image} alt="error" className="mb-5" />}

                {linkYoutube && (
                  <ReactPlayer
                    url={linkYoutube}
                    width="100%"
                    controls
                    style={{ marginBottom: "30px", marginTop: "30px" }}
                  />
                )}
              </div>
            );
          });

          const resultLink = (
            <div>
              {linkArray.length > 0 &&
                linkArray.map((link) => {
                  return (
                    <div className="flex items-center my-3">
                      <p className="mr-2">{link.text}</p>
                      <p className="text-[#D8B975] hover:text-gray-400 cursor-pointer">
                        {link.linkProduct}
                      </p>
                    </div>
                  );
                })}
            </div>
          );

          const UI = (
            <div>
              {titleUi}
              {result}
              {resultLink}
            </div>
          );

          return UI;
        })}
      </div>

      {/* <div className="text-left w-full">
        <p className=" text-[18px]">Stay focused, be present</p>
        <p className="my-4 text-[18px]">Kira</p>
      </div> */}

      <div className="text-left w-full flex flex-col">
        {detail.linkProduct.map((link) => {
          return (
            <a
              key={link._id}
              href={link.text}
              className="my-3 cursor-pointer text-[#D8B975]"
            >
              {link.text}
            </a>
          );
        })}
      </div>

      <div className="text-left w-full">
        <SharePost />
      </div>
    </div>
  );
};

export default DetailPostChildren;
