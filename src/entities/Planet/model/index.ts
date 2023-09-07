import {
  createEffect,
  createEvent,
  createStore,
  forward,
  sample,
} from 'effector';
import { fetchPlanetInfo } from 'shared/api/planets';
import { IPlanet, TGetPlanetInfo } from 'shared/types/api/planets';

const resetPlanet = createEvent();
const $planet = createStore<IPlanet>(null).reset(resetPlanet);
const getPlanet = createEvent<string>();
const getPlanetFx = createEffect<TGetPlanetInfo>(fetchPlanetInfo);
const $planetIsPending = getPlanetFx.pending;

forward({
  from: getPlanet,
  to: getPlanetFx,
});

sample({
  clock: getPlanetFx.doneData,
  fn: (response) => response.data,
  target: $planet,
});

export const planetModel = {
  stores: { $planet, $planetIsPending },
  events: { getPlanet, resetPlanet },
};
