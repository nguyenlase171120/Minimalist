import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PostApi } from "../../../api/posts/PostApi";
import HomeChildrenList from "../../../pages/home/childrens/HomeChildrenList";
import RingLoader from "react-spinners/RingLoader";

const CategoryList = () => {
  const { typeCategory } = useParams();
  const [listCategory, setListCategory] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const result = await PostApi.getPostByCategory(typeCategory);

      if (result) {
        setListCategory(result.data);
      }
    };

    fetchData();
  }, [typeCategory]);
  return (
    <div>
      <div className="flex justify-center items-center flex-col">
        <h1 className="text-[40px] tracking-widest mb-10">
          {" "}
          <span>Category : </span> {typeCategory}{" "}
        </h1>

        {listCategory.length > 0 ? (
          <HomeChildrenList listPosts={listCategory} />
        ) : (
          <RingLoader color={"#123abc"} loading={true} css="" size={40} />
        )}
      </div>
    </div>
  );
};

export default CategoryList;
