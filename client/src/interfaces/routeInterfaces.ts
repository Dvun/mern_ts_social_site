import React from 'react';

export interface IRoute {
  path: string;
  exact: boolean;
  component: React.ComponentType;
}

export enum RoutesEnum {
  'AUTH' = '/auth',
  'HOME' = '/',
  'PROFILE' = '/profile/:userId'
}