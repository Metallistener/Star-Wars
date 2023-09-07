import { TGetPlanetInfo } from 'shared/types/api/planets';
import { API } from '../executor';

export const fetchPlanetInfo: TGetPlanetInfo = (url) => API().get(url);
