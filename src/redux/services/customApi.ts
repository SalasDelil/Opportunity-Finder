import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ApiResponse } from "./types";

export const customApi = createApi({
  reducerPath: "customApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://akil-backend.onrender.com/" }),
  endpoints: (builder) => ({
    getAllOpportunities: builder.query({
      query: () => "opportunities/search",
    }),
    getOpportunityById: builder.query<ApiResponse, string>({
      query: (id) => `opportunities/${id}`,
    }),
  }),
});

export const { useGetOpportunityByIdQuery, useGetAllOpportunitiesQuery } = customApi;
