import { baseApi } from "./baseApi";

export const reviewApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getProductReviews: build.query({
      query: (productId: string) => `/reviews?product=${productId}`,
      providesTags: ["Review"],
    }),
    addReview: build.mutation({
      query: (body) => ({ url: "/reviews", method: "POST", body }),
      invalidatesTags: ["Review"],
    }),
    deleteReview: build.mutation({
      query: (id: string) => ({ url: `/reviews/${id}`, method: "DELETE" }),
      invalidatesTags: ["Review"],
    }),
  }),
});

export const { useGetProductReviewsQuery, useAddReviewMutation, useDeleteReviewMutation } = reviewApi;
