import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        title: 'Home | NgPortfolio',
        loadComponent: () => import('./feature/home/home.component').then(m => m.HomeComponent),
      },
      {
        path: 'about',
        title: 'About | NgPortfolio',
        loadComponent: () => import('./feature/about/about.component').then(m => m.AboutComponent),
      },
      {
        path: 'projects',
        title: 'Projects | NgPortfolio',
        loadComponent: () => import('./feature/projects/projects.component').then(m => m.ProjectsComponent),
      },
      {
        path: 'contact',
        title: 'Contact | NgPortfolio',
        loadComponent: () => import('./feature/contact/contact.component').then(m => m.ContactComponent),
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];
