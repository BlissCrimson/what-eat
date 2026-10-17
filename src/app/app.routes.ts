import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Imprint } from './pages/imprint/imprint';
import { PrivacyPolicy } from './pages/privacy-policy/privacy-policy';
import { Disches } from './pages/disches/disches';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'dishes', component: Disches },
  { path: 'imprint', component: Imprint },
  { path: 'privacy-policy', component: PrivacyPolicy },
  // { path: '404', component: 404 },
  { path: '**', redirectTo: '404' },
];
