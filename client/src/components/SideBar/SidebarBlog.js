import { useEffect, useState } from "react";
import { PostApi } from "../../api/posts/PostApi";
import ArchivesBlog from "../Archives/ArchivesBlog";
import CategoriesBlog from "../Category/CategoriesBlog";
import SideBarChildren from "./SideBarChildren";

function SidebarBlog() {
  const [listPosts, setListPosts] = useState([
    {
      name: "",
      size: 0,
    },
  ]);

  //Call api to get all posts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await PostApi.getAllPosts();

        if (result) {
          const newArray = [];
          result.data.map((item) => {
            const listSubCategory = item.category.split(", ");

            listSubCategory.map((item2) => {
              const result = newArray.find((item) => item.name === item2);

              if (!result) {
                newArray.push({
                  name: item2,
                  size: 1,
                });
              } else {
                result.size++;
              }
            });
          });
          newArray[0].size = newArray[0].size - 2;
          setListPosts(newArray);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex items-center justify-center flex-col">
      <SideBarChildren />
      <ArchivesBlog />
      <CategoriesBlog allPosts={listPosts} />
    </div>
  );
}

export default SidebarBlog;
