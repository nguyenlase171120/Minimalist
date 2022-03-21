import { useNavigate } from "react-router-dom";

const CategoriesBlog = ({ allPosts }) => {
  const navigate = useNavigate();

  const handleCategory = (name) => {
    window.scrollTo({ top: 250, behavior: "smooth" });
    navigate(`category/${name}`);
  };

  return (
    <div className="mt-4 w-full">
      <p className="uppercase py-3 mb-3 bg-[#DDDDDD] text-center">Categories</p>

      <ul className="mt-7">
        {allPosts.length > 0 &&
          allPosts.map((category, index) => {
            return (
              <li key={index}>
                {
                  <div className="mb-4 flex items-center text-[15px]">
                    <p
                      className="mr-2 hover:text-[#D8B975] tracking-wider text-md cursor-pointer"
                      onClick={() => handleCategory(category.name)}
                    >
                      {category.name}
                    </p>

                    <p className="text-[#D8B975] font-semibold">
                      ({category.size})
                    </p>
                  </div>
                }
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default CategoriesBlog;
