import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import dotenv from "dotenv";

dotenv.config();

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_URL }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => `products`, // Make sure this matches your API endpoint
    }),
  }),
});

export const { useGetAllProductsQuery } = productsApi;
