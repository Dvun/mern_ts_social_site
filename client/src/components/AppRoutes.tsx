import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {privateRoutes, publicRoutes} from '../config/routes';
import {RoutesEnum} from '../interfaces/routeInterfaces';
import {RootStateOrAny, useSelector} from 'react-redux';

const AppRoutes: React.FC = () => {
  const {isAuth} = useSelector(({authSlice}: RootStateOrAny) => authSlice)

  return (
    isAuth ?
      <Switch>
        {privateRoutes.map(route => (
          <Route
            key={route.path}
            path={route.path}
            exact={route.exact}
            component={route.component}
          />
        ))}
        <Redirect to={RoutesEnum.HOME}/>
      </Switch>
      :
      <Switch>
        {publicRoutes.map(route => (
          <Route
            key={route.path}
            path={route.path}
            exact={route.exact}
            component={route.component}
          />
        ))}
        <Redirect to={RoutesEnum.AUTH}/>
      </Switch>
  );
};

export default AppRoutes;
