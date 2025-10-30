// src/services/posts.js
import { publicApiClient } from "@/axios";

export const getPosts = async () => {
  try {
    const res = await publicApiClient.get(
      "https://jsonplaceholder.typicode.com/posts?limit=5"
    );
    return res.data;
  } catch (error) {
    console.error(error);
    throw error; // let React Query handle the error
  }
};
export const getPostById = async (postId) => {
  try {
    const res = await publicApiClient.get(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    return res.data;
  } catch (error) {
    console.error(error);
    throw error; // let React Query handle the error
  }
};

export const createPost = async (post) => {
  try {
    const res = await publicApiClient.post(
      "https://jsonplaceholder.typicode.com/posts",
      post
    );
    console.log("Created post:", res.data);
    return { id: 1, name: "post" };
  } catch (error) {
    console.error(error);
    throw error; // let React Query handle the error
  }
};
