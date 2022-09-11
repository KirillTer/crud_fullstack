import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IComp } from "../models/IPost";

export const postAPI = createApi({
  reducerPath: "postAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5001" }),
  // baseQuery: fetchBaseQuery({
  //   baseUrl: "https://jsonplaceholder.typicode.com",
  // }),
  tagTypes: ["Post"],
  endpoints: (build) => ({
    fetchAllPosts: build.query<IComp[], any>({
      query: (reqParams: any = {limit: 10, page: 1}) => ({
        url: `/comp`,
        // params: {
        //   _limit: reqParams.limit,
        //   _page: reqParams.page,
        // },
      }),
      providesTags: (result) => ["Post"],
    }),
    createPost: build.mutation<IComp, IComp>({
      query: (post) => ({
        url: `/comp`,
        method: "POST",
        body: post,
      }),
      invalidatesTags: ["Post"],
    }),
    // updatePost: build.mutation<IPost, IPost>({
    //   query: (post) => ({
    //     url: `/posts/${post.id}`,
    //     method: "PUT",
    //     body: post,
    //   }),
    //   invalidatesTags: ["Post"],
    // }),
    // deletePost: build.mutation<IPost, IPost>({
    //   query: (post) => ({
    //     url: `/posts/${post.id}`,
    //     method: "DELETE",
    //   }),
    //   invalidatesTags: ["Post"],
    // }),
  }),
});
