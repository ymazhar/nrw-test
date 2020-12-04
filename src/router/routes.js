import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { root, episodes } from './path-constants';

const TvShowPage = lazy(() => import('../pages/TVShowPage'));
const EpisodeDetailPage = lazy(() => import('../pages/EpisodeDetailPage'));

export const Routes = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Switch>
      <Redirect exact from="/" to={root} />
      <Route path={root} component={TvShowPage} />
      <Route path={episodes} component={EpisodeDetailPage} />
    </Switch>
  </Suspense>
);
