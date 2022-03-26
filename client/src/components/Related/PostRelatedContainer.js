import React, { useEffect, useState } from "react";
import { PostApi } from "../../api/posts/PostApi";
import PostRelatedChildren from "./PostRelatedChildren";

const PostRelatedContainer = ({ title }) => {
  const [listPosts, setListPosts] = useState([]);
  const [index, setIndex] = useState(0);
  const [nextPost, setNextPost] = useState();
  const [prevPost, setPrevPost] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const result = await PostApi.getAllPosts();
      const newArray = [];

      if (result.success === true) {
        while (newArray.length < 3) {
          const number = Math.trunc(Math.random() * result.data.length);
          const post = result.data[number];
          if (post.title !== title) {
            newArray.push(post);
          }
        }

        //Handle previous post and next post
        for (let i = 0; i < result.data.length; i++) {
          const post = result.data[i];

          if (post.title === title) {
            console.log(9);
            const nextPost = result.data[i + 1];
            const prevPost = result.data[i - 1];
            setNextPost(nextPost);
            setPrevPost(prevPost);
            break;
          }
        }
      }
      setListPosts(newArray);
    };
    fetchData();
  }, [title]);

  // console.log(listPosts);
  return (
    <div>
      {listPosts.length > 0 && (
        <PostRelatedChildren data={listPosts} next={nextPost} prev={prevPost} />
      )}
    </div>
  );
};

export default PostRelatedContainer;
