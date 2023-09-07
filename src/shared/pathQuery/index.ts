import queryString from 'query-string';

export const setQuery = (params: object): string =>
  queryString.stringify(params);
export const getQuery = (params: string): object => queryString.parse(params);
