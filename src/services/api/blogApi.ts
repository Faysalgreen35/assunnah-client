import { baseApi } from "./baseApi";

export const blogApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getBlogs: build.query({
      query: (params?: { category?: string; limit?: number; page?: number }) => ({
        url: "/blogs",
        params,
      }),
      providesTags: ["Blog"],
    }),
    getBlogBySlug: build.query({
      query: (slug: string) => `/blogs/${slug}`,
      providesTags: ["Blog"],
    }),
  }),
});

export const { useGetBlogsQuery, useGetBlogBySlugQuery } = blogApi;
