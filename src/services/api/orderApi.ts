import { baseApi } from "./baseApi";

export const orderApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createOrder: build.mutation({
      query: (body) => ({ url: "/order", method: "POST", body }),
      invalidatesTags: ["Order"],
    }),
    getMyOrders: build.query({
      query: () => "/order/my-orders",
      providesTags: ["Order"],
    }),
    getOrderById: build.query({
      query: (id: string) => `/order/${id}`,
      providesTags: ["Order"],
    }),
    cancelOrder: build.mutation({
      query: (id: string) => ({
        url: `/order/${id}/status`,
        method: "PATCH",
        body: { status: "Cancelled" },
      }),
      invalidatesTags: ["Order"],
    }),
  }),
});

export const { useCreateOrderMutation, useGetMyOrdersQuery, useGetOrderByIdQuery, useCancelOrderMutation } = orderApi;
