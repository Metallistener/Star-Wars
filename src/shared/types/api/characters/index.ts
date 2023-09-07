import { AxiosResponse } from 'axios';

export type TGetCharacters = (
  params?: IGetCharactersParams,
) => Promise<AxiosResponse<ICharacters>>;

export interface IGetCharactersParams {
  next?: string;
  search?: string;
}

export interface ICharacters {
  count: number;
  next: string;
  previous: string;
  results: ICharacter[];
}

export interface ICharacter {
  id: number;
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  image?: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
}

export type TGetCharacterInfo = (
  params: IGetCharacterInfoParams,
) => Promise<AxiosResponse<ICharacter>>;

export interface IGetCharacterInfoParams {
  id: number;
}
