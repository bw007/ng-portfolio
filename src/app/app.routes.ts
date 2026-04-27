import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        title: 'Home',
        loadComponent: () => import('./feature/home/home.component').then(m => m.HomeComponent),
      },
      {
        path: 'home',
        redirectTo: '',
        pathMatch: 'full'
      },
      {
        path: 'about',
        title: 'About',
        loadComponent: () => import('./feature/about/about.component').then(m => m.AboutComponent),
      },
      {
        path: 'projects',
        title: 'Projects',
        loadComponent: () => import('./feature/projects/projects.component').then(m => m.ProjectsComponent),
      },
      {
        path: 'contact',
        title: 'Contact',
        loadComponent: () => import('./feature/contact/contact.component').then(m => m.ContactComponent),
      },
      {
        path: '**',
        title: 'Page Not Found',
        loadComponent: () => import('./feature/not-found/not-found.component').then(m => m.NotFoundComponent),
      },
    ]
  }
]