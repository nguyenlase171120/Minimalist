import axiosClient from "../axiosClient";

export const PostApi = {
  getAllPosts: () => {
    const url = "/posts/get-all-posts";
    return axiosClient.get(url);
  },

  getPostPagination: (param) => {
    const url = `/posts/get-post-pagination?page=${param.page}&size=${param.size}`;
    return axiosClient.get(url, param);
  },
};
