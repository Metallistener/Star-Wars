import { AxiosResponse } from "axios";
import { ICharacters, IGetCharactersParams } from "shared/types/api/characters";

export interface IGetCharactersNext {
  isNext?: boolean;
  search?: string;
}

export type TGetCharactersFx = (
  props: IGetCharactersParams,
) => Promise<AxiosResponse<ICharacters>>;
