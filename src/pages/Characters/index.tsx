import React, { FC, useEffect } from 'react';
import { useUnit } from 'effector-react';
import { charactersModel } from './model';
import { Search } from './ui/Search';
import { Content } from './ui/Content';

export const Characters: FC = () => {
  const [characters] = useUnit([charactersModel.characters.stores.$characters]);

  useEffect(() => {
    if (!(characters || characters?.results?.length))
      charactersModel.characters.events.getCharacters();
  }, []);

  return (
    <>
      <Search />
      <Content />
    </>
  );
};
