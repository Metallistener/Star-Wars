import React, { Suspense, lazy } from 'react';
import { EditCharacterModal } from 'features/EditCharacterModal';
import { Route, Switch } from 'react-router-dom';
import { endPoints } from 'shared/config/endPoints';

const CharactersList = lazy(() =>
  import('pages/Characters').then(({ Characters }) => ({
    default: Characters,
  })),
);

const CharacterInfo = lazy(() =>
  import('pages/CharacterInfo').then(({ CharacterInfo }) => ({
    default: CharacterInfo,
  })),
);

export const Characters = () => {
  return (
    <>
      <Switch>
        <Route exact path={endPoints.CHARACTERS}>
          <Suspense fallback={<React.Fragment />}>
            <CharactersList />
          </Suspense>
        </Route>
        <Route exact path={endPoints.CHARACTER_INFO}>
          <Suspense fallback={<React.Fragment />}>
            <CharacterInfo />
          </Suspense>
        </Route>
      </Switch>
      <EditCharacterModal />
    </>
  );
};
