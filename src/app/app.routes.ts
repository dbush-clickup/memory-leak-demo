import { Route } from '@angular/router';

export const appRoutes: Route[] = [{
  path: 'page',
  loadComponent: () => import('./routes/page/page.component').then(m => m.PageComponent),
},{
  path: '',
  pathMatch: 'full',
  loadComponent: () => import('./routes/main/main.component').then(m => m.MainComponent),
}];
