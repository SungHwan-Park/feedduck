import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

import { FeedForm } from './app/FeedForm';

import App from './app/app';

ReactDOM.render(
  <StrictMode>
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <BrowserRouter>
        <Switch>
          <Route path='/new'>
            <FeedForm />
          </Route>
          <Route path='/'>
            <App />
          </Route>
        </Switch>
      </BrowserRouter>
    </MuiPickersUtilsProvider>
  </StrictMode>,
  document.getElementById('root')
);
