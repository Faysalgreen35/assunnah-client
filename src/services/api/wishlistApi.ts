import { baseApi } from "./baseApi";
import { IProduct, IApiResponse } from "@/types";

export const wishlistApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getWishlist: builder.query<IApiResponse<{ products: IProduct[] }>, void>({
      query: () => "/wishlist",
      providesTags: ["Wishlist"],
    }),
    addToWishlist: builder.mutation<IApiResponse<null>, string>({
      query: (productId) => ({
        url: "/wishlist",
        method: "POST",
        body: { productId },
      }),
      invalidatesTags: ["Wishlist"],
    }),
    removeFromWishlist: builder.mutation<IApiResponse<null>, string>({
      query: (productId) => ({
        url: `/wishlist/${productId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Wishlist"],
    }),
  }),
});

export const {
  useGetWishlistQuery,
  useAddToWishlistMutation,
  useRemoveFromWishlistMutation,
} = wishlistApi;
