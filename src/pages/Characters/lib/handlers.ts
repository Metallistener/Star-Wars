import { ChangeEvent } from 'react';
import { charactersModel } from '../model';

const onClickNext = (isSearch: boolean) => () => {
  if (isSearch) {
    charactersModel.search.events.searchCharacters({ isNext: true });
    return;
  }
  charactersModel.characters.events.getCharacters({ isNext: true });
};

const onChange = (name: string) => (e: ChangeEvent<HTMLInputElement>) => {
  charactersModel.search.stores.searchForm.fields[name]?.onChange(
    e.target.value.trim(),
  );
};

const onClear = () => {
  charactersModel.search.stores.searchForm.reset();
};

export const charactersHandlers = {
  onClickNext,
  onChange,
  onClear,
};
