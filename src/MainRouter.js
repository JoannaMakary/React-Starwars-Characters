import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './core/Home';
import Characters from './character/Characters';
import Character from './character/Character';

const MainRouter = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/characters" component={Characters}></Route>
      <Route exact path="/character/:characterId" component={Character}></Route>
    </Switch>
  </div>
);

export default MainRouter;
