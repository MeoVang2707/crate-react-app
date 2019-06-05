import React from 'react';
import Routers from 'routes/Router';
import { BrowserRouter, Switch } from 'react-router-dom';

import './app.less';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Routers />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
