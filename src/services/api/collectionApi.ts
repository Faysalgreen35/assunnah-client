import { baseApi } from "./baseApi";

export interface ICollection {
  _id?: string;
  slug: string;
  name: string;
  description?: string;
  image: string;
  count?: number;
  aspect?: "portrait" | "square";
  isActive?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface ICollectionsResponse {
  data: ICollection[];
  total: number;
}

export const collectionApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Get all collections
    getCollections: builder.query<ICollectionsResponse, { page?: number; limit?: number } | undefined>({
      query: (params) => ({
        url: "/collection",
        params: params || { limit: 100 },
      }),
      providesTags: ["Collection"],
    }),

    // Get single collection by slug
    getCollectionBySlug: builder.query<{ data: ICollection }, string>({
      query: (slug) => `/collection/${slug}`,
      providesTags: ["Collection"],
    }),

    // Create collection (Admin)
    createCollection: builder.mutation<{ data: ICollection }, Partial<ICollection>>({
      query: (body) => ({
        url: "/collection",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Collection"],
    }),

    // Update collection (Admin)
    updateCollection: builder.mutation<{ data: ICollection }, { id: string; body: Partial<ICollection> }>({
      query: ({ id, body }) => ({
        url: `/collection/${id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["Collection"],
    }),

    // Delete collection (Admin)
    deleteCollection: builder.mutation<{ success: boolean }, string>({
      query: (id) => ({
        url: `/collection/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Collection"],
    }),

    // Bulk upload collections from CSV (Admin)
    bulkUploadCollections: builder.mutation<
      { data: ICollection[]; imported: number },
      FormData
    >({
      query: (formData) => ({
        url: "/collection/bulk-upload",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["Collection"],
    }),
  }),
});

export const {
  useGetCollectionsQuery,
  useGetCollectionBySlugQuery,
  useCreateCollectionMutation,
  useUpdateCollectionMutation,
  useDeleteCollectionMutation,
  useBulkUploadCollectionsMutation,
} = collectionApi;
