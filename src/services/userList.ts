import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IUserList } from 'services/type';

// Define a service using a base URL and expected endpoints
export const userListApi = createApi({
  reducerPath: 'userList',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://gorest.co.in',
  }),
  endpoints: (builder) => ({
    getUserList: builder.query<IUserList[], string>({
      query: () => ({
        url: 'public/v2/users',
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetUserListQuery } = userListApi;
