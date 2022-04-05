import React, { useEffect, useState } from "react";
import { PostApi } from "../../api/posts/PostApi";
import PostRelatedChildren from "./PostRelatedChildren";

const PostRelatedContainer = ({ title }) => {
  const [listPosts, setListPosts] = useState([]);
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
            let nextPost = result.data[i + 1];
            let prevPost = result.data[i - 1];

            if (prevPost === undefined) {
              prevPost = result.data[result.data.length - 1];
            }

            if (nextPost === undefined) {
              nextPost = result.data[0];
            }

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

  return (
    <div>
      {listPosts.length > 0 && nextPost && prevPost && (
        <PostRelatedChildren data={listPosts} next={nextPost} prev={prevPost} />
      )}
    </div>
  );
};

export default PostRelatedContainer;
