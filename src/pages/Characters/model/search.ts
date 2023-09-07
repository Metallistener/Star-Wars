import {
  createEffect,
  createEvent,
  createStore,
  forward,
  sample,
} from 'effector';
import { createForm } from 'effector-forms';
import { rules } from 'shared/lib/rules';
import { ICharacters } from 'shared/types/api/characters';
import { IGetCharactersNext, TGetCharactersFx } from '../types';
import { fetchCharacters } from 'shared/api/characters';
import CharactersJson from 'shared/api/characters.json';
import { debounce } from 'patronum';

const searchForm = createForm<{ search: string }>({
  fields: {
    search: {
      init: '',
      rules: [rules.onlyNumbersAndLetters()],
    },
  },
  validateOn: ['change', 'submit'],
});

const resetSearchResult = createEvent();

const $searchResult = createStore<ICharacters>(null).reset(resetSearchResult);
const searchCharacters = createEvent<IGetCharactersNext>();
const searchCharactersFx = createEffect<TGetCharactersFx>(fetchCharacters);
const $searchIsPending = searchCharactersFx.pending;

sample({
  clock: debounce({
    source: searchForm.fields.search.onChange,
    timeout: 1000,
  }),
  filter: (search) => Boolean(search && search.trim().length),
  fn: (search) => ({ search }),
  target: searchCharactersFx,
});

sample({
  clock: searchForm.fields.search.onChange,
  source: $searchResult,
  filter: (searchResult) => Boolean(searchResult),
  target: resetSearchResult,
});

sample({
  clock: searchCharacters,
  source: {
    search: searchForm.fields.search.$value,
    $searchResult,
  },
  fn: ({ search, $searchResult }, params) => ({
    search,
    ...(params?.isNext && { next: $searchResult?.next }),
  }),
  target: searchCharactersFx,
});

sample({
  clock: searchCharactersFx.done,
  source: $searchResult,
  filter: (_, { params }) => Boolean(params?.search),
  fn: (state, { params, result: newResults }) =>
    params?.next
      ? {
          ...newResults.data,
          results: [...state.results, ...newResults.data.results].map(
            (item) => ({
              ...item,
              image: CharactersJson.find((char) => char.name === item.name)
                ?.image,
            }),
          ),
        }
      : {
          ...newResults.data,
          results: newResults.data.results.map((item) => ({
            ...item,
            image: CharactersJson.find((char) => char.name === item.name)
              ?.image,
          })),
        },
  target: $searchResult,
});

export const search = {
  stores: { searchForm, $searchResult, $searchIsPending },
  events: { searchCharacters },
};
