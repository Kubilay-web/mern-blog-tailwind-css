import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api/",
  }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => `products`, // Make sure this matches your API endpoint
    }),
  }),
});

export const { useGetAllProductsQuery } = productsApi;
