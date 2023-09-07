import { createEffect, createEvent, createStore, sample } from 'effector';
import { fetchCharacters } from 'shared/api/characters';
import { ICharacters } from 'shared/types/api/characters';
import { IGetCharactersNext, TGetCharactersFx } from '../types';
import CharactersJson from 'shared/api/characters.json';
import { IToastMessage } from 'shared/ui/Toast/types';
import { toastModel } from 'shared/ui/Toast/model';

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
  source: $characters,
  filter: (_, { params }) => !Boolean(params?.search),
  fn: (state, { params, result: newResults }) =>
    params?.next
      ? {
          ...newResults.data,
          results: [...state.results, ...newResults.data.results]
            .map((item) => ({
              ...item,
              image: CharactersJson.find((char) => char.name === item.name)
                ?.image,
            }))
            .map((item, index) => ({ ...item, id: index + 1 })),
        }
      : {
          ...newResults.data,
          results: newResults.data.results
            .map((item) => ({
              ...item,
              image: CharactersJson.find((char) => char.name === item.name)
                ?.image,
            }))
            .map((item, index) => ({ ...item, id: index + 1 })),
        },
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
