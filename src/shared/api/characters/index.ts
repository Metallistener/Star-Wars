import { TGetCharacterInfo, TGetCharacters } from 'shared/types/api/characters';
import { CHARACTERS, CHARACTER_INFO } from '../endpoints';
import { API } from '../executor';

export const fetchCharacters: TGetCharacters = (params) => {
  let url = params?.next ?? CHARACTERS;
  if (params?.search && !params?.next) {
    url += `?search=${params.search}`;
  }
  return API().get(url);
};

export const fetchCharacter: TGetCharacterInfo = (params) =>
  API().get(CHARACTER_INFO(params.id));
