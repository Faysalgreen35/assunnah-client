import { baseApi } from "./baseApi";

export const blogApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getBlogs: build.query({
      query: (params?: { category?: string; limit?: number; page?: number }) => ({
        url: "/blog",
        params,
      }),
      providesTags: ["Blog"],
    }),
    getBlogBySlug: build.query({
      query: (slug: string) => `/blog/${slug}`,
      providesTags: ["Blog"],
    }),
  }),
});

export const { useGetBlogsQuery, useGetBlogBySlugQuery } = blogApi;
