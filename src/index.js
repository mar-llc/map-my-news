import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import './assets/css/nucleo-icons.css';
import './assets/scss/blk-design-system-react.scss';
import './assets/demo/demo.css';

import Index from './views/Index';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" render={(props) => <Index {...props} />} />

      <Redirect from="/components" to="/" />
    </Switch>
  </BrowserRouter>
);
