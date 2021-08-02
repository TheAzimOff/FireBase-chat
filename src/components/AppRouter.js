import React, { useContext } from 'react';
import { privateRoute, publicRoute } from '../routes';
import { Route, Switch, Redirect } from 'react-router-dom';
import { CHAT_ROUTE, LOGIN_ROUTE } from '../util/const';
import { useAuthState } from 'react-firebase-hooks/auth';
import { context } from '..';

export default function AppRouter() {
  const [auth] = useContext(context);
  const [user] = useAuthState(auth);
  return user ? (
    <Switch>
      <Route
        exact={true}
        path={privateRoute.path}
        component={privateRoute.Component}
      />
      <Redirect to={CHAT_ROUTE} />
    </Switch>
  ) : (
    <Switch>
      <Route
        exact={true}
        path={publicRoute.path}
        component={publicRoute.Component}
      />
      <Redirect to={LOGIN_ROUTE} />
    </Switch>
  );
}
