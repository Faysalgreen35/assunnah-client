import { baseApi } from "./baseApi";

export const orderApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createOrder: build.mutation({
      query: (body) => ({ url: "/orders", method: "POST", body }),
      invalidatesTags: ["Order"],
    }),
    getMyOrders: build.query({
      query: () => "/orders/my-orders",
      providesTags: ["Order"],
    }),
    getOrderById: build.query({
      query: (id: string) => `/orders/${id}`,
      providesTags: ["Order"],
    }),
    cancelOrder: build.mutation({
      query: (id: string) => ({ url: `/orders/${id}/cancel`, method: "PATCH" }),
      invalidatesTags: ["Order"],
    }),
  }),
});

export const { useCreateOrderMutation, useGetMyOrdersQuery, useGetOrderByIdQuery, useCancelOrderMutation } = orderApi;
