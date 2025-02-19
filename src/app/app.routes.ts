import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '**',
    redirectTo: 'home',
  },
  {
    path: '',
    data: {},
    loadComponent: () =>
      import('@pages/home/home.component').then((mod) => mod.HomeComponent),
  },
  {
    path: 'login',
    data: {},
    loadComponent: () =>
      import('@pages/login/login.component').then((mod) => mod.LoginComponent),
  },
  {
    path: 'profile',
    data: {},
    loadComponent: () =>
      import('@pages/profile/profile.component').then(
        (mod) => mod.ProfileComponent
      ),
  },
  {
    path: 'settings',
    data: {},
    loadComponent: () =>
      import('@pages/settings/settings.component').then(
        (mod) => mod.SettingsComponent
      ),
  },
  {
    path: 'story',
    data: {},
    loadComponent: () =>
      import('@pages/story/story.component').then((mod) => mod.StoryComponent),
  },
  {
    path: 'user',
    data: {},
    loadComponent: () =>
      import('@pages/user/user.component').then((mod) => mod.UserComponent),
  },
];
