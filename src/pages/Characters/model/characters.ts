import { createEffect, createEvent, createStore, sample } from 'effector';
import { fetchCharacters } from 'shared/api/characters';
import { ICharacters } from 'shared/types/api/characters';
import { IGetCharactersNext, TGetCharactersFx } from '../types';
import CharactersJson from 'shared/api/characters.json';
import { IToastMessage } from 'shared/ui/Toast/types';
import { toastModel } from 'shared/ui/Toast/model';
import { cachedCharactersModel } from 'entities/Characters/model';

const $characters = createStore<ICharacters>(null);
const getCharacters = createEvent<IGetCharactersNext>();
const getCharactersFx = createEffect<TGetCharactersFx>(fetchCharacters);
const $charactersIsPending = getCharactersFx.pending;

sample({
  clock: getCharacters,
  source: $characters,
  fn: (state, params) => ({
    next: params?.isNext ? state?.next : null,
  }),
  target: getCharactersFx,
});

sample({
  clock: getCharactersFx.done,
  source: {
    $characters,
    cachedCharacters: cachedCharactersModel.stores.$cachedCharacters,
  },
  filter: (_, { params }) => !params?.search,
  fn: (
    { $characters, cachedCharacters },
    { params, result: newResults },
  ): ICharacters => ({
    ...newResults.data,
    results: (params?.next
      ? [...$characters.results, ...newResults.data.results]
      : newResults.data.results
    ).map((item) => {
      const charId = Number(item.url.match(/[0-9]+/)[0]);
      return {
        ...item,
        id: charId,
        origin_name: item.name,
        name:
          cachedCharacters?.find((cachedItem) => cachedItem.id === charId)
            ?.name || item.name,
        image: CharactersJson.find((char) => char.name === item.name)?.image,
      };
    }),
  }),
  target: $characters,
});

sample({
  clock: cachedCharactersModel.stores.$cachedCharacters,
  source: $characters,
  filter: (characters, cachedCharacters) =>
    Boolean(characters && characters.results.length && cachedCharacters.length),
  fn: (characters, cachedCharacters): ICharacters => ({
    ...characters,
    results: characters.results.map((item) => {
      const charId = Number(item.url.match(/[0-9]+/)[0]);
      return {
        ...item,
        id: charId,
        name:
          cachedCharacters?.find((cachedItem) => cachedItem.id === charId)
            ?.name || item.name,
        image: CharactersJson.find((char) => char.name === item.origin_name)
          ?.image,
      };
    }),
  }),
  target: $characters,
});

sample({
  clock: getCharactersFx.failData,
  fn: (err): IToastMessage => ({
    message: err.message,
    isError: true,
  }),
  target: toastModel.events.setMessage,
});

export const characters = {
  events: {
    getCharacters,
  },
  stores: {
    $characters,
    $charactersIsPending,
  },
};
