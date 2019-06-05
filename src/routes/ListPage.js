import React from 'react';
import Register from './ui/pages/register';
import UpdateExperience from './ui/pages/experience/UpdateExperience';
import ViewExperience from './ui/pages/experience/ViewExperience';
import Loadable from 'react-loadable';

const LoadingComponent = () => <h1> Please wait... </h1>;

const listPage = {
  Home: Loadable({
    loader: () => import('./ui/pages/home'),
    loading: () => LoadingComponent,
    modules: ['home'],
  }),

  Register,
};
export default listPage;
