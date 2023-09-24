import { createEffect, createEvent, forward, restore } from 'effector';
import { CACHED_EDITED_CHARACTERS } from 'shared/config/constants';
import { ICharacter } from 'shared/types/api/characters';
import { TGetCachedCharactersFx } from '../types';

const getCachedCharacters = createEvent();
const getCachedCharactersFx = createEffect<TGetCachedCharactersFx>(() => {
  const res = localStorage.getItem(CACHED_EDITED_CHARACTERS);
  if (res) return JSON.parse(res);
  return [];
});

const setCachedCharacters = createEvent<ICharacter[]>();

const $cachedCharacters = restore<ICharacter[]>(
  getCachedCharactersFx.doneData,
  [],
);

forward({
  from: getCachedCharacters,
  to: getCachedCharactersFx,
});

forward({
  from: setCachedCharacters,
  to: $cachedCharacters,
});

export const cachedCharactersModel = {
  stores: { $cachedCharacters },
  events: { getCachedCharacters, setCachedCharacters },
};
