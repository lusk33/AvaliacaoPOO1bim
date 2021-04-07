import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/home';
import Profile from '../pages/profile';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/profile/:id" component={Profile} />
  </Switch>
);

export default Routes;
