import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://mern-blog-0lv8.onrender.com/",
  }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => `products`, // Make sure this matches your API endpoint
    }),
  }),
});

export const { useGetAllProductsQuery } = productsApi;
