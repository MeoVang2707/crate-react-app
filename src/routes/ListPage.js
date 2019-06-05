import React from 'react';
import Loadable from 'react-loadable';

import NotFound from 'ui/pages/NotFound';

const LoadingComponent = () => <h1> Please wait... </h1>;

const listPage = {
  Home: Loadable({
    loader: () => import('ui/pages/Home'),
    loading: () => LoadingComponent,
    modules: ['home'],
  }),

  NotFound,
};
export default listPage;
