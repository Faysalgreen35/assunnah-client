import { baseApi } from "./baseApi";
import { ICategory, IApiResponse } from "@/types";

export const categoryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query<IApiResponse<ICategory[]>, void>({
      query: () => "/category",
      providesTags: ["Category"],
    }),
    getCategoryBySlug: builder.query<IApiResponse<ICategory>, string>({
      query: (slug) => `/category/${slug}`,
      providesTags: ["Category"],
    }),
  }),
});

export const { useGetCategoriesQuery, useGetCategoryBySlugQuery } = categoryApi;
