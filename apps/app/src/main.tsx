import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { FeedForm } from './app/FeedForm';

import App from './app/app';

ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path='/app'>
          <App />
        </Route>
        <Route exact path='/'>
          <FeedForm />
        </Route>
      </Switch>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('root')
);
