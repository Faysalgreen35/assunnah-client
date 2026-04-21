import { baseApi } from "./baseApi";
import { IProduct, IPaginatedResponse, IApiResponse } from "@/types";

export interface IProductQuery {
  page?: number;
  limit?: number;
  sort?: string;
  category?: string;
  occasion?: string;
  recipient?: string;
  minPrice?: number;
  maxPrice?: number;
  search?: string;
}

export const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<IPaginatedResponse<IProduct>, IProductQuery>({
      query: (params = {}) => ({
        url: "/product",
        params,
      }),
      providesTags: ["Product"],
    }),
    getProductBySlug: builder.query<IApiResponse<IProduct>, string>({
      query: (slug) => `/product/${slug}`,
      providesTags: ["Product"],
    }),
    getFlashSaleProducts: builder.query<IPaginatedResponse<IProduct>, void>({
      query: () => "/flash-sale",
      providesTags: ["Product"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductBySlugQuery,
  useGetFlashSaleProductsQuery,
} = productApi;
