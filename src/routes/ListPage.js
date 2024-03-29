import React from 'react';
import Loadable from 'react-loadable';

import NotFound from 'ui/pages/NotFound';
import Loading from 'ui/pages/Loading';

const listPage = {
  Home: Loadable({
    loader: () => import('ui/pages/Home'),
    loading: () => Loading(),
    modules: 'home',
  }),
  About: Loadable({
    loader: () => import('ui/pages/About'),
    loading: () => Loading(),
    modules: 'about',
  }),

  NotFound,
};
export default listPage;
