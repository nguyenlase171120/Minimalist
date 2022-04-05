import React from "react";
import { useNavigate } from "react-router-dom";

const ArchiveChildren = ({ dateParam }) => {
  const navigate = useNavigate();

  const handleArchives = (date) => {
    window.scrollTo({ top: 250, behavior: "smooth" });
    navigate(`/archives/${date}`);
  };

  return (
    <div>
      <ul>
        {dateParam.map((item, id) => {
          return (
            <div className="flex items-center mb-3">
              <li
                key={id}
                className=" hover:text-[#D8B975] cursor-pointer"
                onClick={() => handleArchives(item.date)}
              >
                {item.date}
              </li>
              <span className="ml-2 text-[#D8B975] ">({item.size + 1})</span>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default ArchiveChildren;
