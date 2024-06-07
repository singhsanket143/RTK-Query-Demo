import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postApi = createApi({
    reducerPath: 'postsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000'}),
    endpoints: (builder) => {
        return {
            getPosts: builder.query({
                query: () => {
                    return {
                        method: 'GET',
                        url: '/posts'
                    }
                }
            }),
            addPost: builder.mutation({
                query: (newPost) => {
                    return {
                        url: '/posts',
                        method: 'POST',
                        body: newPost
                    }
                }
            }),
            deletePost: builder.mutation({
                query: (id) => {
                    return {
                        method: 'DELETE',
                        url: `/posts/${id}`
                    }
                }
            })
        }
    }
});
console.log(postApi)
export const { useGetPostsQuery, useAddPostMutation, useDeletePostMutation } = postApi;