import { ICharacter } from 'shared/types/api/characters';

export interface IEditCharacterModal {
  isOpen: boolean;
  info: ICharacter;
}

export interface IEditForm {
  name: string;
  birth_year: string;
  homeworld: string;
  gender: string;
  height: string;
  mass: string;
  eye_color: string;
  skin_color: string;
}

export type TCacheCharacterFx = (props: {
  form: IEditForm;
  info: ICharacter;
  cachedCharacters: ICharacter[];
}) => ICharacter[];
