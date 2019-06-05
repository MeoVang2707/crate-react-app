import React from 'react';
import Routers from 'routes/Router';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import configureStore from 'store';
import history from 'utils/history';
import Wrapper from 'MultyLanguage';

import './app.less';

const store = configureStore({}, history);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Wrapper>
              <Routers />
            </Wrapper>
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
