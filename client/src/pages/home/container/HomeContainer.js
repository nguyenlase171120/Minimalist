import { useEffect, useState } from "react";
import HomeChildren from "../childrens/HomeChildren";
import { PostApi } from "../../../api/posts/PostApi";
import HomeChildrenBody from "../childrens/HomeChildrenBody";
import RingLoader from "react-spinners/RingLoader";

function HomeContainer() {
  const [listPosts, setListPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(10);
  let count = 0;

  useEffect(async () => {
    const param = {
      page,
      size,
    };

    const result = await PostApi.getPostPagination(param);
    if (result.success) {
      setLoading(true);
      setListPosts((prev) => [...prev, ...result.data]);
    }
  }, [page]);

  //Handle for pagination
  const handlePagination = () => {
    setPage(page + 1);
  };

  return (
    <div className="min-h-screen mt-[60px] w-[70%]  ">
      <div className=" mt-10   ">
        <div className="flex items-center justify-center flex-col max-w-full ">
          {loading ? (
            listPosts.map((value, item) => {
              if (count <= 1) {
                count++;
                return <HomeChildrenBody data={value} />;
              }
            })
          ) : (
            <RingLoader color={"#123abc"} loading={true} css="" size={40} />
          )}
        </div>

        <div className="flex items-center justify-between flex-wrap">
          {loading &&
            listPosts.map((value, item) => {
              return (
                <div className="w-[45%] flex justify-center">
                  <HomeChildrenBody data={value} />
                </div>
              );
            })}
        </div>
        <div className="flex items-center justify-center">
          <button
            className="uppercase mt-10 mb-24 py-2 px-5 tracking-widest bg-[#DDDDDD] hover:bg-opacity-75"
            onClick={handlePagination}
          >
            Older post
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomeContainer;
