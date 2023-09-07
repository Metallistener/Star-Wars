import { createEffect, createEvent, createStore, sample } from 'effector';
import { fetchCharacter } from 'shared/api/characters';
import { ICharacter, TGetCharacterInfo } from 'shared/types/api/characters';
import CharactersJson from 'shared/api/characters.json';
import { planetModel } from 'entities/Planet/model';
import { IToastMessage } from 'shared/ui/Toast/types';
import { toastModel } from 'shared/ui/Toast/model';

const getCharacterInfo = createEvent<number>();
const getCharacterInfoFx = createEffect<TGetCharacterInfo>(fetchCharacter);
const $info = createStore<ICharacter>(null).reset(getCharacterInfo);
const $infoIsPending = getCharacterInfoFx.pending;

sample({
  clock: getCharacterInfo,
  fn: (id) => ({ id }),
  target: getCharacterInfoFx,
});

sample({
  clock: getCharacterInfoFx.done,
  fn: ({ params, result }) => ({
    ...result.data,
    id: params.id,
    image: CharactersJson.find((char) => char.name === result.data.name)?.image,
  }),
  target: $info,
});

sample({
  clock: getCharacterInfoFx.doneData,
  fn: (response) => response.data.homeworld,
  target: planetModel.events.getPlanet,
});

sample({
  clock: getCharacterInfoFx.failData,
  fn: (err): IToastMessage => ({
    message: err.message,
    isError: true,
  }),
  target: toastModel.events.setMessage,
});

sample({
  clock: planetModel.stores.$planet,
  source: $info,
  filter: (_, planet) => Boolean(planet),
  fn: (info, planet) => ({
    ...info,
    homeworld: planet.name,
  }),
  target: $info,
});

export const info = {
  stores: { $info, $infoIsPending },
  events: { getCharacterInfo },
};
