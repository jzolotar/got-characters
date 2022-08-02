import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface CharacterData {
  url: string;
  name: string;
  culture: string;
  born: string;
  died: string;
  titles: string[];
  aliases: string[];
  father: string;
  mother: string;
  spuse: string;
  allegiances: string[];
  books: string[];
  povBooks: string[];
  tvSeries: string[];
  playedBy: string[];
}

interface InputType {
  page: string;
  pageSize: string;
}

export const gotApi = createApi({
  reducerPath: 'gotApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://www.anapioficeandfire.com/api/characters',
  }),
  endpoints: (builder) => ({
    getCharactersByDefault: builder.query<CharacterData[], void>({
      query: () => `?page=1&pageSize=10`,
    }),
    getCharactersByInput: builder.query<CharacterData[], InputType>({
      query: ({ page, pageSize }) => `?page=${page}&pageSize=${pageSize}`,
    }),
  }),
});

export const { useGetCharactersByDefaultQuery, useGetCharactersByInputQuery } =
  gotApi;
