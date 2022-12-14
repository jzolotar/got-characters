import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

function parseLinkHeader(header: string): KeyValueMap<Object> {
  let parts: string[];
  let links: KeyValueMap<Object> = {};

  if (header.length === 0) {
    throw new Error('input must not be of zero length');
  }

  parts = header.split(',');
  // Parse each part into a named link
  parts.forEach((part) => {
    let section: string[] = part.split(';');
    let name: string;
    let page: string;
    let pageSize: string;

    if (section.length !== 2) {
      throw new Error("section could not be split on ';'");
    }

    const splitData = section[0].split('&');
    page = splitData[0].trim().slice(55);
    pageSize = splitData[1].slice(9).replace('>', '');

    name = section[1].replace(/rel="(.*)"/, '$1').trim();
    // links[name] = url;
    const obj = {
      name,
      page,
      pageSize,
    };
    links[name] = obj;
  });

  return links;
}

interface HouseData {
  url: string;
  name: string;
  region: string;
  coatOfArms: string;
  words: string;
  titles: string[];
  seats: string[];
  currentLord: string;
  heir: string;
  overlord: string;
  founded: string;
  diedOut: string;
  ancestralWeapons: string[];
  codeBranches: string[];
  swornMembers: string[];
}

interface KeyValueMap<T> {
  [key: string]: T;
}

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
  gender: string;
  spuse: string;
  allegiances: string[];
  books: string[];
  povBooks: string[];
  tvSeries: string[];
  playedBy: string[];
}

interface FinalData {
  characters: CharacterData[];
  pageInfo: {
    first: { name: string; page: string; pageSize: string };
    last: { name: string; page: string; pageSize: string };
    next: { name: string; page: string; pageSize: string };
  };
}

interface InputType {
  page: string;
  pageSize: string;
}

export const gotApi = createApi({
  reducerPath: 'gotApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://www.anapioficeandfire.com/api/',
  }),
  endpoints: (builder) => ({
    getCharactersByDefault: builder.query<FinalData, number>({
      query: (page) => `characters?page=${page}&pageSize=10`,
      transformResponse: (response: CharacterData[], meta, arg) => {
        const link = meta!.response!.headers.get('Link') as string;

        const transformedResponsed = {
          characters: response,
          pageInfo: parseLinkHeader(link),
        } as FinalData;
        return transformedResponsed;
      },
    }),

    getCharactersByInput: builder.query<CharacterData[], InputType>({
      query: ({ page, pageSize }) =>
        `characters?page=${page}&pageSize=${pageSize}`,
    }),

    getHouseData: builder.query<HouseData, string>({
      query: (id) => `houses/${id}`,
    }),
  }),
});

export const {
  useGetCharactersByDefaultQuery,
  useGetCharactersByInputQuery,
  useGetHouseDataQuery,
} = gotApi;
