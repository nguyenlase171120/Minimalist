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

  getPostByCategory: (param) => {
    const url = `/posts/getCategory/${param}`;
    return axiosClient.get(url, param);
  },

  getPostByArchives: (param) => {
    const url = `/posts/getArchives/${param}`;
    return axiosClient.get(url, param);
  },

  getPostById: (param) => {
    const url = `/posts/getPost/${param}`;
    return axiosClient.get(url, param);
  },

  getPostBySearch: (param) => {
    const url = `/posts/search/${param}`;
    return axiosClient.get(url, param);
  },
};
