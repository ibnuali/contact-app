import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import fetch from "cross-fetch";

export const contactApi = createApi({
  reducerPath: "contactSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://contact.herokuapp.com",
    fetchFn: fetch,
  }),
  tagTypes: ["Contact"],
  endpoints: (builder) => ({
    getContacts: builder.query({
      query: () => `/contact`,
      providesTags: ["Contact"],
    }),
    addContact: builder.mutation({
      query: (body) => ({
        url: `/contact`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Contact"],
    }),
    updateContact: builder.mutation({
      query: ({ id, ...body }) => ({
        url: `/contact/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Contact"],
    }),
    deleteContact: builder.mutation({
      query: (id) => ({
        url: `/contact/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Contact"],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useAddContactMutation,
  useUpdateContactMutation,
  useDeleteContactMutation,
} = contactApi;
