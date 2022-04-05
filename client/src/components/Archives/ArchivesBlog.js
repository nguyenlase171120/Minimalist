import React, { useEffect, useState } from "react";
import { PostApi } from "../../api/posts/PostApi";
import ArchiveChildren from "./ArchiveChildren";

const ArchivesBlog = () => {
  const [listPosts, setListPosts] = useState([
    {
      date: "",
      size: 0,
    },
  ]);

  const handleCovertMonth = (month) => {
    // eslint-disable-next-line default-case
    switch (month) {
      case "01": {
        return "January";
      }
      case "02": {
        return "February";
      }
      case "03": {
        return "March";
      }
      case "04": {
        return "April";
      }
      case "05": {
        return "May";
      }
      case "06": {
        return "June";
      }
      case "07": {
        return "July";
      }
      case "08": {
        return "August";
      }
      case "09": {
        return "September";
      }
      case "10": {
        return "October";
      }
      case "11": {
        return "November";
      }
      case "12": {
        return "December";
      }
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await PostApi.getAllPosts();

      const newArray = [];
      result.data.map((item) => {
        const date = item.createdAt.split("-");
        const month = date[1];
        const monthConvert = handleCovertMonth(month);
        const year = date[0];
        const dateConvert = monthConvert + " " + year;

        const checkExisted = newArray.find(({ date }) => {
          return date === dateConvert;
        });

        // console.log(checkExisted);

        if (!checkExisted) {
          newArray.push({
            date: dateConvert,
            size: 1,
          });
        } else {
          const checkExisted = newArray.find(({ date }) => {
            return date === dateConvert;
          });
          ++checkExisted.size;
        }
      });
      setListPosts(newArray);
    };
    fetchData();
  }, []);

  return (
    <div className="mt-4 w-full">
      <p className="uppercase py-3 mb-3 bg-[#DDDDDD] text-center">Archives</p>
      <ArchiveChildren dateParam={listPosts} />
    </div>
  );
};

export default ArchivesBlog;
