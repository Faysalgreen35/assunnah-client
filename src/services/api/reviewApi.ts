import { baseApi } from "./baseApi";

export const reviewApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getProductReviews: build.query({
      query: (productId: string) => `/review/product/${productId}`,
      providesTags: ["Review"],
    }),
    addReview: build.mutation({
      query: (body) => ({ url: "/review", method: "POST", body }),
      invalidatesTags: ["Review"],
    }),
    deleteReview: build.mutation({
      query: (id: string) => ({ url: `/review/${id}`, method: "DELETE" }),
      invalidatesTags: ["Review"],
    }),
  }),
});

export const { useGetProductReviewsQuery, useAddReviewMutation, useDeleteReviewMutation } = reviewApi;
