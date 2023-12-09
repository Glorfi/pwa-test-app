import { IAppRoute } from 'interfaces/app-route';
import { DashboardPage } from './DashboardPage';
import { UserPage } from './UserPage';

export const AppRoutes: IAppRoute[] = [
  { path: '/', element: DashboardPage },
  { path: '/users/:id', element: UserPage },
];
