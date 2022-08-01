import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const gotApi = createApi({
  reducerPath: 'gotApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'dsdasdas' }),
  endpoints: (builder) => ({}),
});
