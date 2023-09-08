import React, { FC, Suspense, lazy } from 'react';
import { CircularProgress } from '@mui/material';
import { Redirect, Route, Switch } from 'react-router-dom';
import { endPoints } from 'shared/config/endPoints';
import { NetworkErrorBoundaryFallback } from 'shared/ui/NetworkErrorBoundaryFallback';

const Header = lazy(() =>
  import('widgets/Header').then(({ Header }) => ({
    default: Header,
  })),
);

const Characters = lazy(() =>
  import('processes/Router/CharactersRoutes').then(({ Characters }) => ({
    default: Characters,
  })),
);

export const Routes: FC = () => {
  return (
    <>
      <Header />
      <NetworkErrorBoundaryFallback>
        <Switch>
          <Route exact path={[endPoints.DEFAULT_PAGE, endPoints.CHARACTER_INFO]}>
            <Suspense fallback={<CircularProgress />}>
              <Characters />
            </Suspense>
          </Route>
          <Redirect to={endPoints.DEFAULT_PAGE} />
        </Switch>
      </NetworkErrorBoundaryFallback>
    </>
  );
};
