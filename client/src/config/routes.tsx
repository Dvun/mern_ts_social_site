import { IRoute, RoutesEnum } from '../interfaces/routeInterfaces';
import AuthPage from '../pages/authPage/authPage';
import HomePage from '../pages/homePage/HomePage';
import ProfilePage from '../pages/profilePage/ProfilePage';

export const publicRoutes: IRoute[] = [
  {
    path: RoutesEnum.AUTH,
    exact: true,
    component: AuthPage,
  },
];

export const privateRoutes: IRoute[] = [
  {
    path: RoutesEnum.HOME,
    exact: true,
    component: HomePage,
  },
  {
    path: RoutesEnum.PROFILE,
    exact: true,
    component: ProfilePage,
  },
];
