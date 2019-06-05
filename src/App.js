import React from 'react';
import Routers from 'routes/Router';
import { BrowserRouter, Switch } from 'react-router-dom';

import './app.less';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Routers />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
