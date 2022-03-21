import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PostApi } from "../../../api/posts/PostApi";
import HomeChildrenList from "../../../pages/home/childrens/HomeChildrenList";
import RingLoader from "react-spinners/RingLoader";

const ArchivesList = () => {
  const { typeArchives } = useParams();
  const [listArchives, setListArchives] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const result = await PostApi.getPostByArchives(typeArchives);

      if (result) {
        setListArchives(result.data);
      }
    };

    fetchData();
  }, [typeArchives]);

  return (
    <div className="flex justify-center items-center flex-col">
      <h1 className="text-[40px] tracking-widest mb-10">
        {" "}
        <span>Category : </span> {typeArchives}{" "}
      </h1>

      {listArchives ? (
        <HomeChildrenList listPosts={listArchives} />
      ) : (
        <RingLoader color={"#123abc"} loading={true} css="" size={40} />
      )}
    </div>
  );
};

export default ArchivesList;
